"use client";

type Props = {
  monthNote: string;
  selectedNote: string;
  onMonthNoteChange: (value: string) => void;
  onSelectedNoteChange: (value: string) => void;
};

export default function NotesSection({
  monthNote,
  selectedNote,
  onMonthNoteChange,
  onSelectedNoteChange,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-200">
        <h3 className="font-semibold text-zinc-800 mb-2">Monthly Notes</h3>
        <textarea
          value={monthNote}
          onChange={(e) => onMonthNoteChange(e.target.value)}
          placeholder="Write notes for this month..."
          className="w-full h-32 resize-none rounded-xl border border-zinc-200 p-3 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-200">
        <h3 className="font-semibold text-zinc-800 mb-2">
          Selected Range Notes
        </h3>
        <textarea
          value={selectedNote}
          onChange={(e) => onSelectedNoteChange(e.target.value)}
          placeholder="Write notes for selected date or range..."
          className="w-full h-32 resize-none rounded-xl border border-zinc-200 p-3 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
}