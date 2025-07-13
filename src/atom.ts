import { atom } from "jotai";

interface IDateAtom {
  startDate: string;
  endDate: string;
}
export const DateAtom = atom<IDateAtom | null>(null);
