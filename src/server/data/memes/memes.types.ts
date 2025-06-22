export type MemeType = 'image' | 'video';
export type MemeItem = {
  url: string;
  filename: string;
  type: MemeType;
};