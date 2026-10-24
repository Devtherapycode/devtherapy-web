import { EpisodeBasicInfo } from '@/server/data/episodes/episodes.types';
import { RefObject, useEffect, useRef, useState } from 'react';

// The parts of the YouTube IFrame Player API the previews use (https://developers.google.com/youtube/iframe_api_reference).
type Player = { playVideo: () => void; pauseVideo: () => void; mute: () => void; unMute: () => void };
type PlayerEvent = { target: Player; data: number };
type YouTubeApi = {
  Player: new (iframe: HTMLIFrameElement, options: { events: Record<string, (event: PlayerEvent) => void> }) => Player;
  PlayerState: { PLAYING: number };
};

declare global {
  interface Window {
    YT?: YouTubeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let api: Promise<YouTubeApi> | undefined;

const loadApi = () =>
  (api ??= new Promise((resolve) => {
    if (window.YT?.Player) return resolve(window.YT);
    window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
  }));

/** A muted, chromeless embed for previews. */
export const previewEmbedUrl = (episode: EpisodeBasicInfo) =>
  `https://www.youtube.com/embed/${episode.youtubeId}?autoplay=1&mute=1&controls=0&playsinline=1&rel=0&iv_load_policy=3&enablejsapi=1&origin=${window.location.origin}`;

/**
 * Connects the player API to a preview iframe. `playing` turns true once the video really plays, so the still frame
 * stays in place while the player loads, buffers its first frames or fails.
 */
export const usePreviewPlayer = (iframe: RefObject<HTMLIFrameElement>) => {
  const player = useRef<Player>();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadApi().then((YT) => {
      if (cancelled || !iframe.current) return;
      new YT.Player(iframe.current, {
        events: {
          onReady: (event) => (player.current = event.target),
          onStateChange: (event) => event.data === YT.PlayerState.PLAYING && setPlaying(true),
        },
      });
    });
    return () => {
      cancelled = true;
    };
  }, [iframe]);

  return { player, playing };
};
