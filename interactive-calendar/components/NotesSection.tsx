"use client";

type Props = {
  monthNote: string;
  singleDateNote: string;
  rangeNote: string;
  isSingleDateSelected: boolean;
  isRangeSelected: boolean;
  selectedSingleDate: string | null;
  selectedRange: string | null;
  onMonthNoteChange: (value: string) => void;
  onSingleDateNoteChange: (value: string) => void;
  onRangeNoteChange: (value: string) => void;
};

export default function NotesSection({
  monthNote,
  singleDateNote,
  rangeNote,
  isSingleDateSelected,
  isRangeSelected,
  selectedSingleDate,
  selectedRange,
  onMonthNoteChange,
  onSingleDateNoteChange,
  onRangeNoteChange,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Monthly Notes */}
      <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-200">
        <h3 className="font-semibold text-zinc-800 mb-2">Monthly Notes</h3>
        <textarea
          value={monthNote}
          onChange={(e) => onMonthNoteChange(e.target.value)}
          placeholder="Write notes for this month..."
          className="w-full h-32 resize-none rounded-xl border border-zinc-200 p-3 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Dynamic Single / Range Notes */}
      <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-200 space-y-4">
        {!isSingleDateSelected && !isRangeSelected && (
          <div className="text-sm text-zinc-500">
            Select a date or date range to add notes.
          </div>
        )}

        {isSingleDateSelected && (
          <div>
            <h3 className="font-semibold text-zinc-800 mb-2">
              Single Date Note
            </h3>
            <p className="text-xs text-zinc-500 mb-2">
              Selected Date: {selectedSingleDate}
            </p>
            <textarea
              value={singleDateNote}
              onChange={(e) => onSingleDateNoteChange(e.target.value)}
              placeholder="Write note for this selected date..."
              className="w-full h-28 resize-none rounded-xl border border-zinc-200 p-3 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        )}

        {isRangeSelected && (
          <div>
            <h3 className="font-semibold text-zinc-800 mb-2">Range Note</h3>
            <p className="text-xs text-zinc-500 mb-2">
              Selected Range: {selectedRange}
            </p>
            <textarea
              value={rangeNote}
              onChange={(e) => onRangeNoteChange(e.target.value)}
              placeholder="Write note for this selected date range..."
              className="w-full h-28 resize-none rounded-xl border border-zinc-200 p-3 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        )}
      </div>
    </div>
  );
}