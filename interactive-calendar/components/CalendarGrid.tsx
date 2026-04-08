"use client";

import { format, isSameMonth, isToday } from "date-fns";
import clsx from "clsx";
import {
  getCalendarDays,
  isDateInRange,
  isStartDate,
  isEndDate,
} from "@/lib/calendar";

type Props = {
  currentMonth: Date;
  rangeStart: Date | null;
  rangeEnd: Date | null;
  onSelectDate: (date: Date) => void;
};

const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function CalendarGrid({
  currentMonth,
  rangeStart,
  rangeEnd,
  onSelectDate,
}: Props) {
  const days = getCalendarDays(currentMonth);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-zinc-500">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const inRange = isDateInRange(day, rangeStart, rangeEnd);
          const isStart = isStartDate(day, rangeStart);
          const isEnd = isEndDate(day, rangeEnd);
          const today = isToday(day);
          const current = isSameMonth(day, currentMonth);

          return (
            <button
              key={day.toISOString()}
              onClick={() => onSelectDate(day)}
              className={clsx(
                "aspect-square rounded-2xl text-sm md:text-base font-medium transition-all duration-200 relative flex items-center justify-center",
                current ? "text-zinc-800" : "text-zinc-300",
                "hover:scale-[1.03] hover:shadow-sm",
                inRange && "bg-blue-100 text-blue-800",
                (isStart || isEnd) && "bg-blue-600 text-white shadow-md",
                today && !isStart && !isEnd && "ring-2 ring-blue-400"
              )}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}