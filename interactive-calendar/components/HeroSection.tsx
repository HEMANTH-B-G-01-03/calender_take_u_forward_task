import Image from "next/image";
import { format } from "date-fns";

type Props = {
  currentMonth: Date;
};

export default function HeroSection({ currentMonth }: Props) {
  return (
    <div className="relative overflow-hidden rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-tr-none min-h-[280px] md:min-h-full">
      <Image
        src="/images/mountain.jpeg"
        alt="Calendar hero"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
        <div className="inline-block bg-blue-600/90 text-white px-5 py-4 rounded-tr-[2rem] rounded-bl-[2rem] shadow-lg">
          <p className="text-sm uppercase tracking-widest opacity-90">
            {format(currentMonth, "yyyy")}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold uppercase">
            {format(currentMonth, "MMMM")}
          </h1>
        </div>
      </div>
    </div>
  );
}