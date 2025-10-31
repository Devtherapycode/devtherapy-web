import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load environment variables from .env files
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

// Configuration
const YOUTUBE_API_KEY = process.env.VITE_YOUTUBE_API_KEY || process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = 'UCHzaT-JZeoOCAlZWyUFc4qQ';
const EPISODES_DATA_DIR = path.join(process.cwd(), 'src/server/data/episodes');

if (!YOUTUBE_API_KEY) {
  throw new Error('YouTube API key not found. Please set VITE_YOUTUBE_API_KEY or YOUTUBE_API_KEY in your .env.local or .env file.');
}

interface YoutubeVideo {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
  };
  contentDetails: {
    duration: string;
  };
}

interface CustomEpisodeData {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: number;
  tags: string[];
  slug: string;
  youtubeId: string;
  guest: string;
  // Custom fields
  customTags?: string[];
  guestId?: string;
  highlights?: string[];
  notes?: string;
  featured?: boolean;
  episodeNumber?: number;
}

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
  let videos: Array<{ contentDetails: { videoId: string } }> = [];
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
async function fetchVideoDetails(videoIds: string[]): Promise<YoutubeVideo[]> {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoIds.join(',')}&key=${YOUTUBE_API_KEY}`;
  const res = await axios.get(url);
  return res.data.items;
}

// Helper to parse ISO 8601 duration to minutes
function parseDuration(isoDuration: string): number {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const hours = parseInt(match[1] || '0', 10);
  const minutes = parseInt(match[2] || '0', 10);
  const seconds = parseInt(match[3] || '0', 10);
  return hours * 60 + minutes + Math.round(seconds / 60);
}

// Extract episode number from title
function extractEpisodeNumber(title: string): number | undefined {
  const match = title.match(/devtherapy\s+(?:episode\s+)?#?(\d+)/i);
  return match ? parseInt(match[1], 10) : undefined;
}

// Generate tags from title and description
function generateTags(title: string, description: string): string[] {
  const tags: string[] = [];
  const text = `${title} ${description}`.toLowerCase();

  // Common tech topics
  const techTopics = [
    'javascript',
    'typescript',
    'react',
    'vue',
    'angular',
    'nodejs',
    'python',
    'java',
    'c#',
    'dotnet',
    'web development',
    'frontend',
    'backend',
    'fullstack',
    'mobile',
    'ios',
    'android',
    'flutter',
    'react native',
    'database',
    'sql',
    'nosql',
    'mongodb',
    'postgresql',
    'mysql',
    'redis',
    'devops',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'gcp',
    'ci/cd',
    'testing',
    'tdd',
    'bdd',
    'unit testing',
    'integration testing',
    'architecture',
    'microservices',
    'monolith',
    'api',
    'rest',
    'graphql',
    'security',
    'authentication',
    'authorization',
    'oauth',
    'jwt',
    'performance',
    'optimization',
    'scalability',
    'monitoring',
    'logging',
  ];

  techTopics.forEach((topic) => {
    if (text.includes(topic)) {
      tags.push(topic);
    }
  });

  return tags;
}

// Get ordinal suffix for episode naming
function getOrdinalSuffix(num: number): string {
  const j = num % 10;
  const k = num % 100;
  if (j === 1 && k !== 11) {
    return 'st';
  }
  if (j === 2 && k !== 12) {
    return 'nd';
  }
  if (j === 3 && k !== 13) {
    return 'rd';
  }
  return 'th';
}

// Get ordinal word for valid JavaScript identifier
function getOrdinalWord(num: number): string {
  const ordinals = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh',
    'eighth',
    'ninth',
    'tenth',
    'eleventh',
    'twelfth',
    'thirteenth',
    'fourteenth',
    'fifteenth',
    'sixteenth',
    'seventeenth',
    'eighteenth',
    'nineteenth',
    'twentieth',
    'twentyFirst',
    'twentySecond',
    'twentyThird',
    'twentyFourth',
    'twentyFifth',
    'twentySixth',
    'twentySeventh',
    'twentyEighth',
    'twentyNinth',
    'thirtieth',
  ];

  if (num <= ordinals.length) {
    return ordinals[num - 1];
  }

  // Fallback for numbers beyond our list
  return `episode${num}`;
}

// Generate slug from title
function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/^devtherapy\s+(?:episode\s+)?#?\d+\s*[-:]\s*/i, '') // Remove "Devtherapy Episode #X - " prefix
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
    .substring(0, 50); // Limit length to avoid too long slugs
}

// Validate and clean episode data
function validateEpisodeData(episode: CustomEpisodeData): CustomEpisodeData {
  // Ensure slug is not empty and is valid
  if (!episode.slug || episode.slug.trim() === '') {
    episode.slug = `episode-${episode.episodeNumber || 'unknown'}`;
  }

  // Clean slug to ensure it's URL-safe
  episode.slug = episode.slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Ensure tags array exists
  if (!Array.isArray(episode.tags)) {
    episode.tags = [];
  }

  // Ensure guest is a string
  if (typeof episode.guest !== 'string') {
    episode.guest = '';
  }

  return episode;
}

// Fetch all episodes from YouTube
export async function batchFetchEpisodes(): Promise<CustomEpisodeData[]> {
  console.log('🔄 Fetching episodes from YouTube...');

  const uploadsPlaylistId = await getUploadsPlaylistId(YOUTUBE_CHANNEL_ID);
  const playlistVideos = await fetchAllVideosFromPlaylist(uploadsPlaylistId);
  const videoIds = playlistVideos.map((item) => item.contentDetails.videoId);
  const videoDetails = await fetchVideoDetails(videoIds);

  // Filter and process episodes
  const episodes = videoDetails
    .filter((video) => {
      const title = video.snippet.title || '';
      const durationMin = parseDuration(video.contentDetails.duration);
      return (/^devtherapy episode #/i.test(title) || /^devtherapy #/i.test(title)) && durationMin >= 30;
    })
    .map((video) => {
      const episodeNumber = extractEpisodeNumber(video.snippet.title);
      const generatedTags = generateTags(video.snippet.title, video.snippet.description);
      const slug = generateSlugFromTitle(video.snippet.title);

      const episode: CustomEpisodeData = {
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        date: video.snippet.publishedAt,
        duration: parseDuration(video.contentDetails.duration),
        tags: generatedTags,
        slug: slug,
        youtubeId: video.id,
        guest: '',
        // Custom fields
        customTags: [],
        guestId: '',
        highlights: [],
        notes: '',
        featured: false,
        episodeNumber,
      };

      return validateEpisodeData(episode);
    })
    .sort((a, b) => (a.episodeNumber || 0) - (b.episodeNumber || 0));

  console.log(`✅ Found ${episodes.length} episodes`);
  return episodes;
}

// Fetch single episode by ID
export async function fetchEpisodeById(episodeId: string): Promise<CustomEpisodeData | null> {
  console.log(`🔄 Fetching episode ${episodeId} from YouTube...`);

  try {
    const videoDetails = await fetchVideoDetails([episodeId]);
    if (videoDetails.length === 0) {
      console.log(`❌ Episode ${episodeId} not found`);
      return null;
    }

    const video = videoDetails[0];
    const episodeNumber = extractEpisodeNumber(video.snippet.title);
    const generatedTags = generateTags(video.snippet.title, video.snippet.description);
    const slug = generateSlugFromTitle(video.snippet.title);

    const episode: CustomEpisodeData = {
      id: video.id,
      title: video.snippet.title,
      description: video.snippet.description,
      date: video.snippet.publishedAt,
      duration: parseDuration(video.contentDetails.duration),
      tags: generatedTags,
      slug: slug,
      youtubeId: video.id,
      guest: '',
      // Custom fields
      customTags: [],
      guestId: '',
      highlights: [],
      notes: '',
      featured: false,
      episodeNumber,
    };

    console.log(`✅ Fetched episode: ${episode.title}`);
    return episode;
  } catch (error) {
    console.error(`❌ Error fetching episode ${episodeId}:`, error);
    return null;
  }
}

// Save episode data to numbered file
export function saveEpisodeData(episode: CustomEpisodeData, index: number): boolean {
  const filename = `${index}.ts`;
  const filepath = path.join(EPISODES_DATA_DIR, filename);

  // Check if file already exists
  if (fs.existsSync(filepath)) {
    console.log(`⏭️  Skipping ${filename} - file already exists`);
    return false;
  }

  const ordinalWord = getOrdinalWord(index);

  const fileContent = `import { EpisodeBasicInfo, Episode } from './episodes.types';

export const ${ordinalWord}EpisodeBasicInfo: EpisodeBasicInfo = {
  id: '${episode.id}',
  title: '${episode.title.replace(/'/g, "\\'")}',
  description: 'todo --- Add description',
  date: '${episode.date}',
  duration: ${episode.duration},
  tags: ${JSON.stringify(episode.tags)},
  slug: '${episode.slug}',
  youtubeId: '${episode.youtubeId}',
  guest: '${episode.guest}',
};

export const ${ordinalWord}EpisodeData: Episode = {
  ...${ordinalWord}EpisodeBasicInfo,
  fullDescription: \`${episode.description.replace(/`/g, '\\`').replace(/\n/g, '\\n')}\`,
};
`;

  fs.writeFileSync(filepath, fileContent, 'utf8');
  console.log(`💾 Saved episode data to ${filename}`);
  return true;
}

// Update episodes.types.ts with the generated enum
function updateEpisodesTypesFile(episodes: CustomEpisodeData[]): void {
  const typesFilePath = path.join(EPISODES_DATA_DIR, 'episodes.types.ts');

  // Read existing types file
  let typesContent = '';
  if (fs.existsSync(typesFilePath)) {
    typesContent = fs.readFileSync(typesFilePath, 'utf8');
  }

  // Extract existing enum entries
  const existingEnumMatch = typesContent.match(/export enum EpisodeIdEnum \{([\s\S]*?)\}/);
  const existingEntries = existingEnumMatch ? existingEnumMatch[1] : '';

  // Get existing enum keys
  const existingKeys = new Set<string>();
  if (existingEntries) {
    const keyMatches = existingEntries.matchAll(/(\w+)\s*=\s*'[^']+',?/g);
    for (const match of keyMatches) {
      existingKeys.add(match[1]);
    }
  }

  // Generate new enum entries only for episodes that don't exist
  const newEntries = episodes
    .map((episode) => {
      const enumKey = episode.slug
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_|_$/g, '')
        .toUpperCase();

      const validEnumKey = enumKey || `EPISODE_${episode.episodeNumber || 'UNKNOWN'}`;

      // Only add if this enum key doesn't already exist
      if (!existingKeys.has(validEnumKey)) {
        return `  ${validEnumKey} = '${episode.slug}',`;
      }
      return null;
    })
    .filter(Boolean)
    .join('\n');

  if (newEntries) {
    // Add new entries to existing enum
    if (existingEnumMatch) {
      // Insert new entries before the closing brace
      const updatedEnum = `export enum EpisodeIdEnum {${existingEntries}${newEntries}
}`;
      typesContent = typesContent.replace(existingEnumMatch[0], updatedEnum);
    } else {
      // Create new enum if it doesn't exist
      const newEnum = `export enum EpisodeIdEnum {
${newEntries}
}`;
      typesContent = `${newEnum}\n\n${typesContent}`;
    }

    fs.writeFileSync(typesFilePath, typesContent, 'utf8');
    console.log(`💾 Added new episodes to episodes.types.ts`);
  } else {
    console.log(`⏭️  No new episodes to add to episodes.types.ts`);
  }
}

// Save all episodes data and update episodes.data.ts
export function saveAllEpisodesData(episodes: CustomEpisodeData[]): void {
  let newEpisodesCount = 0;
  const newEpisodes: CustomEpisodeData[] = [];

  // Check which episodes are actually new and save them
  episodes.forEach((episode, index) => {
    const wasSaved = saveEpisodeData(episode, index + 1);
    if (wasSaved) {
      newEpisodesCount++;
      newEpisodes.push(episode);
    }
  });

  console.log(`📊 Created ${newEpisodesCount} new episode files, skipped ${episodes.length - newEpisodesCount} existing files`);

  // Only update episodes.data.ts if we have new episodes
  if (newEpisodesCount > 0) {
    // Read existing episodes.data.ts to get current imports and data
    const dataFilePath = path.join(EPISODES_DATA_DIR, 'episodes.data.ts');
    let existingContent = '';
    let existingImports = '';
    let existingAllEpisodes = '';
    let existingEpisodesRecord = '';

    if (fs.existsSync(dataFilePath)) {
      existingContent = fs.readFileSync(dataFilePath, 'utf8');

      // Extract existing imports - get all import statements
      const importMatches = existingContent.matchAll(/import.*?from.*?;/g);
      const existingImportsArray = Array.from(importMatches, (match) => match[0]);
      existingImports = existingImportsArray.join('\n');

      // Extract existing allEpisodes array
      const allEpisodesMatch = existingContent.match(/export const allEpisodes: EpisodeBasicInfo\[\] = \[([\s\S]*?)\];/);
      existingAllEpisodes = allEpisodesMatch ? allEpisodesMatch[1] : '';

      // Extract existing episodes record
      const episodesMatch = existingContent.match(/export const episodes: Record<EpisodeIdEnum, Episode> = \{([\s\S]*?)\};/);
      existingEpisodesRecord = episodesMatch ? episodesMatch[1] : '';
    }

    // Generate new imports only for new episodes, avoiding duplicates
    const newImports = newEpisodes
      .map((episode, index) => {
        const episodeIndex = episodes.findIndex((e) => e.id === episode.id) + 1;
        const ordinalWord = getOrdinalWord(episodeIndex);
        const importStatement = `import { ${ordinalWord}EpisodeBasicInfo, ${ordinalWord}EpisodeData } from './${episodeIndex}';`;

        // Check if this import already exists
        if (existingImports.includes(importStatement)) {
          return null; // Skip if already exists
        }

        return importStatement;
      })
      .filter(Boolean) // Remove null entries
      .join('\n');

    // Generate new allEpisodes entries
    const newAllEpisodes = newEpisodes
      .map((episode, index) => {
        const episodeIndex = episodes.findIndex((e) => e.id === episode.id) + 1;
        const ordinalWord = getOrdinalWord(episodeIndex);
        return `${ordinalWord}EpisodeBasicInfo`;
      })
      .join(', ');

    // Generate new episodes record entries
    const newEpisodesRecord = newEpisodes
      .map((episode, index) => {
        const episodeIndex = episodes.findIndex((e) => e.id === episode.id) + 1;
        const ordinalWord = getOrdinalWord(episodeIndex);
        const enumKey = episode.slug
          .replace(/[^a-zA-Z0-9]/g, '_')
          .replace(/_+/g, '_')
          .replace(/^_|_$/g, '')
          .toUpperCase();

        const validEnumKey = enumKey || `EPISODE_${episode.episodeNumber || 'UNKNOWN'}`;

        return `  [EpisodeIdEnum.${validEnumKey}]: ${ordinalWord}EpisodeData`;
      })
      .join(',\n');

    // Combine existing and new content
    const combinedImports = existingImports ? `${existingImports}\n${newImports}` : newImports;
    const combinedAllEpisodes = existingAllEpisodes ? `${existingAllEpisodes}, ${newAllEpisodes}` : newAllEpisodes;

    // Handle comma placement for episodes record
    let combinedEpisodesRecord = '';
    if (existingEpisodesRecord) {
      // Remove trailing comma from existing record if present
      const cleanExisting = existingEpisodesRecord.replace(/,\s*$/, '');
      combinedEpisodesRecord = `${cleanExisting},\n${newEpisodesRecord}`;
    } else {
      combinedEpisodesRecord = newEpisodesRecord;
    }

    const indexContent = `${combinedImports}
import { Episode, EpisodeBasicInfo, EpisodeIdEnum } from './episodes.types';

export const allEpisodes: EpisodeBasicInfo[] = [${combinedAllEpisodes}];

export const episodes: Record<EpisodeIdEnum, Episode> = {
${combinedEpisodesRecord},
};
`;

    fs.writeFileSync(dataFilePath, indexContent, 'utf8');
    console.log(`💾 Added ${newEpisodesCount} new episodes to episodes.data.ts`);
  } else {
    console.log(`⏭️  No new episodes to add to episodes.data.ts`);
  }

  // Update episodes.types.ts with only new episodes
  if (newEpisodesCount > 0) {
    updateEpisodesTypesFile(newEpisodes);
  }
}

// Main function to run the script
async function main() {
  try {
    console.log('🚀 Starting episode fetch script...');

    // const episodes = await batchFetchEpisodes();
    // saveAllEpisodesData(episodes);

    const episode = await fetchEpisodeById('08aph3oUDCo');

    // Assuming 'episode' has useful data, and we want to write it to a file.
    const output = JSON.stringify(episode, null, 2);
    fs.writeFileSync('fetched-episode.json', output, 'utf-8');
    console.log('📝 Episode written to fetched-episode.json');

    console.log('✅ Episode fetch script completed successfully!');
  } catch (error) {
    console.error('❌ Error running episode fetch script:', error);
    process.exit(1);
  }
}

// Run if called directly (ES module approach)
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
