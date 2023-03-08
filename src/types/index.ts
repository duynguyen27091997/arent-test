export interface HistoryItem {
  id: number;
  photo: string;
  description: string;
}

export interface DiaryItem {
  id: number;
  time: string;
  description: string;
}

export interface ColumnItem {
  id: number;
  photo: string;
  description: string;
  content: string;
  tags: string[];
}
