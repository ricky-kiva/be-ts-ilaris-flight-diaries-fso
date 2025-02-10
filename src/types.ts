export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
export type Visiblity = 'great' | 'good' | 'ok' | 'poor';

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

export interface DiaryEntry {
  id: number,
  date: string,
  weather: Weather,
  visibility: Visiblity,
  comment?: string;
};
