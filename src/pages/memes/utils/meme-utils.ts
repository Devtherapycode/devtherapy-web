import { MemeItem, MemeType } from '@/server/data/memes/memes.types';

const VIDEO_EXTENSIONS = ['mp4', 'webm', 'mov'] as const;

export const extractFilenameFromUrl = (url: string): string => {
  return url.split('/').pop()?.split('.')[0] || '';
};

export const getFileExtension = (url: string): string => {
  return url.split('.').pop()?.toLowerCase() || '';
};

export const determineMemeType = (url: string): MemeType => {
  const extension = getFileExtension(url);
  return VIDEO_EXTENSIONS.includes(extension as any) ? 'video' : 'image';
};

export const processMemeUrl = (memeUrl: string): MemeItem => {
  const filename = extractFilenameFromUrl(memeUrl);
  const memeType = determineMemeType(memeUrl);

  return {
    url: memeUrl,
    filename,
    type: memeType,
  };
};

export const processMemesData = (memeUrls: string[]): MemeItem[] => {
  return memeUrls.map(processMemeUrl);
};

export const buildShareableUrl = (baseUrl: string, existingParams: string, filename: string): string => {
  const params = new URLSearchParams(existingParams);
  params.set('selected', filename);
  return `${baseUrl}?${params.toString()}`;
};

export const updateUrlParams = (searchParams: URLSearchParams, updates: Record<string, string | null>): URLSearchParams => {
  const newParams = new URLSearchParams(searchParams);

  Object.entries(updates).forEach(([key, value]) => {
    if (value === null) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
  });

  return newParams;
};
