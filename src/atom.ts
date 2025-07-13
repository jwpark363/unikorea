import { atom } from "jotai";

interface IDateAtom {
  startDate: string;
  endDate: string;
}
export const dateAtom = atom<IDateAtom | null>(null);
