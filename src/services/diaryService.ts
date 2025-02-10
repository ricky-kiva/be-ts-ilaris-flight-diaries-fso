import diaries from '../../data/entries';
import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';

const getEntries = (): DiaryEntry[] => diaries;

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => diaries.map(
  ({ id, date, weather, visibility }) => ({
    id, date, weather, visibility
  })
);

const addDiary = () => null;

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries
};
