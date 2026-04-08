import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  isWithinInterval,
  format,
} from "date-fns";

export const getCalendarDays = (currentMonth: Date) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 }); // Monday
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  return eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });
};

export const isDateInRange = (
  date: Date,
  start: Date | null,
  end: Date | null
) => {
  if (!start || !end) return false;
  return isWithinInterval(date, { start, end });
};

export const isStartDate = (date: Date, start: Date | null) =>
  start ? isSameDay(date, start) : false;

export const isEndDate = (date: Date, end: Date | null) =>
  end ? isSameDay(date, end) : false;

export const getDateKey = (date: Date) => format(date, "yyyy-MM-dd");