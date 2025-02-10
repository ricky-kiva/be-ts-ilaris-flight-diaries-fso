import express, { Response } from 'express';
import diaryService from '../services/diaryService';
import { NonSensitiveDiaryEntry } from '../types';

const r = express.Router();

r.get('/', (_req, res: Response<NonSensitiveDiaryEntry[]>) => {
  res.send(diaryService.getNonSensitiveEntries());
});

r.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

export default r;
