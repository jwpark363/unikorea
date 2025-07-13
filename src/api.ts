import { getWeekNumber, getWeekStartEndDate, toYYYYMMDD } from "./util";

const KEY =
  "SCAcSZ5ETTNXkECCPEyo1JllEej99ayshH0CWtmv6DzQ5HRnLZc09JtbQK8nyvz3qN9aZr078TbMnDLeNZRjCg==";

export async function GetDailyTrend(start?: string, end?: string) {
  if (!start || !end) {
    //default 5 week ago
    const week5Ago = getWeekNumber(new Date()) - 5;
    const thisYear = new Date().getFullYear();
    const weekDate = getWeekStartEndDate(thisYear, week5Ago);
    start = toYYYYMMDD(weekDate.start);
    end = toYYYYMMDD(weekDate.end);
  }

  //daily trend data
  const url = new URL("http://apis.data.go.kr/1250000/trend/getTrend");
  url.search = new URLSearchParams({
    ServiceKey: KEY,
    pageNo: "1",
    numOfRows: "100",
    cl: "ARGUMENT_DAIL",
    bgng_ymd: start,
    end_ymd: end,
  }).toString();
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export function GetKimTrend() {
  //kim daily activity
  return "data";
}
