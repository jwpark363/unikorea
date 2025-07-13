import { useEffect, useState } from "react";
import styled from "styled-components";
import { getWeekNumber, getWeekStartEndDate, toYYYYMMDD } from "../util";
import { useAtom, useSetAtom } from "jotai";
import { DateAtom } from "../atom";

const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 8px;
  width: 420px;
  button {
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
  }
  .selected_week {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 4px;
    background-color: steelblue;
    color: white;
    button {
      font-size: 12px;
      padding: 2px;
      background-color: steelblue;
      color: white;
      cursor: pointer;
    }
  }
`;

export default function SelectBox() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [week, setWeek] = useState(getWeekNumber(new Date()) - 5);
  const setDateAtom = useSetAtom(DateAtom);
  useSetAtom;
  const setYearWeek = (unit: -1 | 1) => {
    if (unit === -1) {
      if (week === 1) {
        //first week
        setWeek(53);
        setYear((prev) => prev - 1);
      } else {
        setWeek((prev) => prev - 1);
      }
    } else {
      if (week === 53) {
        //last week
        setWeek(1);
        setYear((prev) => prev + 1);
      } else {
        setWeek((prev) => prev + 1);
      }
    }
  };
  useEffect(() => {
    const { start, end } = getWeekStartEndDate(year, week);
    setDateAtom({ startDate: toYYYYMMDD(start), endDate: toYYYYMMDD(end) });
  }, [year, week]);
  return (
    <Box>
      <div className="selected_week">
        <button onClick={() => setYearWeek(-1)}>◀</button>
        {year}년 {week}주차
        <button onClick={() => setYearWeek(1)}>▶</button>
      </div>
      <button>일일 동향</button>
      <button>위원장 동향</button>
    </Box>
  );
}
