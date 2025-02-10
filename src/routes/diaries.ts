import express from 'express';
import diaryService from '../services/diaryService';

const r = express.Router();

r.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

r.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

export default r;
