

"use client";

import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { format } from "date-fns";

type Props = {
  currentMonth: Date;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
};

export default function MonthNavigator({
  currentMonth,
  onPrev,
  onNext,
  onToday,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-[1.7rem] bg-white/90 backdrop-blur px-4 md:px-6 py-4 shadow-md border border-zinc-200">
      <button
        onClick={onPrev}
        className="p-2 rounded-full hover:bg-zinc-100 transition"
      >
        <ChevronLeft className="w-5 h-5 text-zinc-700" />
      </button>

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 leading-tight">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <p className="text-sm md:text-base text-zinc-500">
          Interactive Wall Calendar
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onToday}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition text-sm shadow"
        >
          <RotateCcw className="w-4 h-4" />
          Today
        </button>

        <button
          onClick={onNext}
          className="p-2 rounded-full hover:bg-zinc-100 transition"
        >
          <ChevronRight className="w-5 h-5 text-zinc-700" />
        </button>
      </div>
    </div>
  );
}