# Devtherapy Scripts

This directory contains utility scripts for managing Devtherapy data.

## Episode Fetch Script

The `fetch-episodes` script fetches episode data from YouTube and saves it locally for better performance and customization.

### Usage

```bash
# Fetch all episodes from YouTube
npm run fetch-episodes

# Or run directly with tsx
npx tsx scripts/fetch-episodes/fetchEpisodes.ts
```

### What it does

1. **Fetches episodes** from the Devtherapy YouTube channel
2. **Filters episodes** to only include Devtherapy episodes (excludes Shorts under 30 minutes)
3. **Generates tags** automatically based on content analysis
4. **Extracts episode numbers** from titles
5. **Saves data locally** in `src/server/data/episodes/` directory
6. **Creates individual files** for each episode for easy customization

### Output Files

- `src/server/data/episodes/episodes.data.ts` - Index file with all episodes
- `src/server/data/episodes/{episodeId}.ts` - Individual episode files

### Customization

After running the script, you can manually edit the generated files to:

- Add custom tags (`customTags`)
- Link to guests (`guestId`)
- Add highlights (`highlights`)
- Add developer notes (`notes`)
- Mark as featured (`featured`)
- Add episode numbers (`episodeNumber`)

### Environment Variables

Make sure to set your YouTube API key in `.env.local`:

```
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
```

### Benefits

- **Better Performance**: No API calls on every page load
- **Full Customization**: Add custom metadata, tags, and notes
- **Guest Integration**: Link episodes to guest profiles
- **Resource Efficiency**: Reduces YouTube API usage
- **Offline Capability**: Works without internet connection 