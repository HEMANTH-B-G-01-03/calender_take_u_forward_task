"use client";

import { useEffect, useMemo, useState } from "react";
import { addMonths, compareAsc, format, startOfToday } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import MonthNavigator from "@/components/MonthNavigator";
import CalendarGrid from "@/components/CalendarGrid";
import NotesSection from "@/components/NotesSection";
import { getDateKey } from "@/lib/calendar";
import { getFromStorage, saveToStorage } from "@/lib/storage";

export default function WallCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);
  const [direction, setDirection] = useState(0);

  const [monthNotes, setMonthNotes] = useState<Record<string, string>>({});
  const [rangeNotes, setRangeNotes] = useState<Record<string, string>>({});

  useEffect(() => {
    const savedMonthNotes = getFromStorage("monthNotes", {});
    const savedRangeNotes = getFromStorage("rangeNotes", {});
    const savedRange = getFromStorage("selectedRange", {
      start: null,
      end: null,
    });

    setMonthNotes(savedMonthNotes);
    setRangeNotes(savedRangeNotes);

    if (savedRange.start) setRangeStart(new Date(savedRange.start));
    if (savedRange.end) setRangeEnd(new Date(savedRange.end));
  }, []);

  useEffect(() => {
    saveToStorage("monthNotes", monthNotes);
  }, [monthNotes]);

  useEffect(() => {
    saveToStorage("rangeNotes", rangeNotes);
  }, [rangeNotes]);

  useEffect(() => {
    saveToStorage("selectedRange", {
      start: rangeStart,
      end: rangeEnd,
    });
  }, [rangeStart, rangeEnd]);

  const handleSelectDate = (date: Date) => {
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(date);
      setRangeEnd(null);
      return;
    }

    if (compareAsc(date, rangeStart) < 0) {
      setRangeEnd(rangeStart);
      setRangeStart(date);
    } else {
      setRangeEnd(date);
    }
  };

  const monthKey = format(currentMonth, "yyyy-MM");

  const selectedRangeKey = useMemo(() => {
    if (!rangeStart) return "none";
    if (!rangeEnd) return getDateKey(rangeStart);
    return `${getDateKey(rangeStart)}_${getDateKey(rangeEnd)}`;
  }, [rangeStart, rangeEnd]);

  const handleNext = () => {
    setDirection(1);
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentMonth((prev) => addMonths(prev, -1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-slate-100 to-blue-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[980px]">
        {/* Spiral Binding */}
        <div className="flex justify-center mb-4 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full border-2 border-zinc-500 bg-white shadow-sm"
            />
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.12)] overflow-hidden border border-zinc-200 mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={format(currentMonth, "yyyy-MM")}
              initial={{
                rotateY: direction > 0 ? -90 : 90,
                opacity: 0,
                x: direction > 0 ? 80 : -80,
              }}
              animate={{
                rotateY: 0,
                opacity: 1,
                x: 0,
              }}
              exit={{
                rotateY: direction > 0 ? 90 : -90,
                opacity: 0,
                x: direction > 0 ? -80 : 80,
              }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="grid md:grid-cols-[1fr_1.25fr] min-h-[650px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <HeroSection currentMonth={currentMonth} />

              <div className="p-5 md:p-8 lg:p-10 space-y-6 bg-[#fbfbfb]">
                <MonthNavigator
                  currentMonth={currentMonth}
                  onPrev={handlePrev}
                  onNext={handleNext}
                  onToday={() => setCurrentMonth(startOfToday())}
                />

                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shadow-sm">
                    Start:{" "}
                    {rangeStart
                      ? format(rangeStart, "dd MMM yyyy")
                      : "Not selected"}
                  </div>
                  <div className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shadow-sm">
                    End:{" "}
                    {rangeEnd
                      ? format(rangeEnd, "dd MMM yyyy")
                      : "Not selected"}
                  </div>
                  <button
                    onClick={() => {
                      setRangeStart(null);
                      setRangeEnd(null);
                    }}
                    className="px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition text-zinc-700 border border-zinc-200 shadow-sm"
                  >
                    Reset Selection
                  </button>
                </div>

                <CalendarGrid
                  currentMonth={currentMonth}
                  rangeStart={rangeStart}
                  rangeEnd={rangeEnd}
                  onSelectDate={handleSelectDate}
                />

                <NotesSection
                  monthNote={monthNotes[monthKey] || ""}
                  selectedNote={rangeNotes[selectedRangeKey] || ""}
                  onMonthNoteChange={(value) =>
                    setMonthNotes((prev) => ({ ...prev, [monthKey]: value }))
                  }
                  onSelectedNoteChange={(value) =>
                    setRangeNotes((prev) => ({
                      ...prev,
                      [selectedRangeKey]: value,
                    }))
                  }
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}