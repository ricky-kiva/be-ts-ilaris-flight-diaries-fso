export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
};

export enum Visiblity {
  Great = 'great',
  Good = 'good',
  OK = 'ok',
  Poor = 'poor'
};

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

export interface DiaryEntry {
  id: number,
  date: string,
  weather: Weather,
  visibility: Visiblity,
  comment?: string;
};
