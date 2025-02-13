import { NewDiaryEntry, Visiblity, Weather } from "./types";
import z from 'zod';

const newEntrySchema = z.object({
  weather: z.nativeEnum(Weather),
  visibility: z.nativeEnum(Visiblity),
  date: z.string().date(),
  comment: z.string().optional()
});

export const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  return newEntrySchema.parse(object);
};
