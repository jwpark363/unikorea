export function toYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 0부터 시작하므로 +1
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
}

export function getWeekStartEndDate(
  year: number,
  week: number
): { start: Date; end: Date } {
  if (year > new Date().getFullYear()) year = 2025;
  if (year < 2024) year = 2024;
  if (week <= 0) week = 1;
  if (week >= 54) week = 53;
  const simple = new Date(year, 0, 1 + (week - 1) * 7);
  const dayOfWeek = simple.getDay(); // 0: Sunday, 1: Monday, ...
  const ISOWeekStartOffset = dayOfWeek <= 4 ? dayOfWeek - 1 : dayOfWeek - 8; // ISO 기준: 목요일 포함 주
  const start = new Date(simple);
  start.setDate(simple.getDate() - ISOWeekStartOffset);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return { start, end };
}

export function getWeekNumber(date: Date): number {
  const target = new Date(date.valueOf());
  const dayNumber = (target.getDay() + 6) % 7; // 월요일=0, 일요일=6
  target.setDate(target.getDate() - dayNumber + 3); // 해당 주의 목요일로 이동

  const firstThursday = new Date(target.getFullYear(), 0, 4); // 1월 4일은 항상 첫 주에 포함
  const firstDayNumber = (firstThursday.getDay() + 6) % 7;
  firstThursday.setDate(firstThursday.getDate() - firstDayNumber + 3);

  const weekNumber =
    Math.floor(
      (target.getTime() - firstThursday.getTime()) / (7 * 24 * 60 * 60 * 1000)
    ) + 1;
  return weekNumber;
}
