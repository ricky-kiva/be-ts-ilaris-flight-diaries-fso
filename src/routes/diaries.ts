import express, { Response } from 'express';
import diaryService from '../services/diaryService';
import { NewDiaryEntry, NonSensitiveDiaryEntry } from '../types';
import { toNewDiaryEntry } from '../utils';
import z from 'zod';

const diaryRouter = express.Router();

diaryRouter.get('/', (_req, res: Response<NonSensitiveDiaryEntry[]>) => {
  res.send(diaryService.getNonSensitiveEntries());
});

diaryRouter.post('/', (req, res) => {
  let newDiaryEntry: NewDiaryEntry;

  try {
    newDiaryEntry = toNewDiaryEntry(req.body);

    if (!newDiaryEntry.date || !newDiaryEntry.visibility || !newDiaryEntry.weather) {
      res.sendStatus(404);
      return;
    }
  } catch(e: unknown) {
    if (e instanceof z.ZodError) {
      res.status(400).send({ error: e.issues });
      return;
    }

    if (e instanceof Error) res.status(400).send({ error: e.message }); 
    
    return;
  }

  const addedEntry = diaryService.addDiary(newDiaryEntry);

  res.json(addedEntry);
});

diaryRouter.get('/:id', (req, res) => {
  let id: number;

  try {
    id = Number(req.params.id);
  } catch(e: unknown) {
    res.sendStatus(404);
    console.log(`Something's wrong: ${e}`);
    
    return;
  }

  const diary = diaryService.findById(Number(id));

  if (!diary) {
    res.sendStatus(404);
    return;
  }
  
  res.send(diary);
});

export default diaryRouter;
