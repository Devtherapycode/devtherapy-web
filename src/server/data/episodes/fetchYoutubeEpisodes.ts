/* eslint-disable @typescript-eslint/no-explicit-any */
import { CACHE_DURATION_MS, CACHE_KEY, YOUTUBE_CHANNEL_ID } from '@/utils/const';
import axios from 'axios';

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

// Helper to get uploads playlistId from channelId
async function getUploadsPlaylistId(channelId: string): Promise<string> {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`;
  const res = await axios.get(url);
  if (res.data.items && res.data.items.length > 0) {
    return res.data.items[0].contentDetails.relatedPlaylists.uploads;
  }
  throw new Error('Uploads playlist not found');
}

// Fetch all videos from uploads playlist (with pagination)
async function fetchAllVideosFromPlaylist(playlistId: string) {
  let videos: any[] = [];
  let nextPageToken = '';
  do {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`;
    const res = await axios.get(url);
    videos = videos.concat(res.data.items);
    nextPageToken = res.data.nextPageToken;
  } while (nextPageToken);
  return videos;
}

// Fetch video details (duration)
async function fetchVideoDetails(videoIds: string[]): Promise<any[]> {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoIds.join(',')}&key=${YOUTUBE_API_KEY}`;
  const res = await axios.get(url);
  return res.data.items;
}

// Main function to fetch all episodes with caching
export async function fetchYoutubeEpisodes(useCache = true) {
  // Check cache first if enabled
  if (useCache) {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION_MS) {
          return data;
        }
      } catch (e) {
        // Ignore cache errors and proceed to fetch
      }
    }
  }

  // Fetch fresh data from YouTube API
  const uploadsPlaylistId = await getUploadsPlaylistId(YOUTUBE_CHANNEL_ID);
  const playlistVideos = await fetchAllVideosFromPlaylist(uploadsPlaylistId);
  const videoIds = playlistVideos.map((item) => item.contentDetails.videoId);
  const videoDetails = await fetchVideoDetails(videoIds);

  // Helper to parse ISO 8601 duration to minutes
  function parseDuration(isoDuration: string): number {
    const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return 0;
    const hours = parseInt(match[1] || '0', 10);
    const minutes = parseInt(match[2] || '0', 10);
    const seconds = parseInt(match[3] || '0', 10);
    return hours * 60 + minutes + Math.round(seconds / 60);
  }

  // Only include if title starts with 'Devtherapy Episode #' or 'Devtherapy #' (case-insensitive) and duration >= 2 min
  const episodes = videoDetails
    .filter((video) => {
      const title = video.snippet.title || '';
      console.log(title);
      const durationMin = parseDuration(video.contentDetails.duration);
      return (/^devtherapy episode #/i.test(title) || /^devtherapy #/i.test(title)) && durationMin >= 30;
    })
    .map((video) => ({
      id: video.id,
      title: video.snippet.title,
      description: video.snippet.description,
      date: video.snippet.publishedAt,
      duration: parseDuration(video.contentDetails.duration),
      tags: [],
      slug: video.id,
      youtubeId: video.id,
      guest: '',
    }));

  // Cache the result if caching is enabled
  if (useCache) {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: episodes, timestamp: Date.now() }));
  }

  return episodes;
}
