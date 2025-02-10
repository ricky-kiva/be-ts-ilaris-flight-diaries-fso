import express from 'express';

const r = express.Router();

r.get('/', (_req, res) => {
  res.send('Fetching all diaries!');
});

r.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

export default r;
