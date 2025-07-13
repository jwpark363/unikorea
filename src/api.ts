const KEY =
  "SCAcSZ5ETTNXkECCPEyo1JllEej99ayshH0CWtmv6DzQ5HRnLZc09JtbQK8nyvz3qN9aZr078TbMnDLeNZRjCg==";

export async function GetDailyTrend() {
  //daily trend data
  const url = new URL("http://apis.data.go.kr/1250000/trend/getTrend");
  url.search = new URLSearchParams({
    ServiceKey: KEY,
    pageNo: "1",
    numOfRows: "2",
    cl: "ARGUMENT_DAIL",
    bgng_ymd: "20250601",
    end_ymd: "20250630",
  }).toString();
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export function GetKimTrend() {
  //kim daily activity
  return "data";
}
