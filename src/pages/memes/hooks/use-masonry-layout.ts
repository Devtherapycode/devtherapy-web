import { MasonryLayoutConfig } from '@/server/data/memes/memes.types';
import { useCallback, useEffect, useRef } from 'react';

const DEFAULT_MASONRY_CONFIG: MasonryLayoutConfig = {
  gap: 16,
  columns: {
    mobile: 2,
    tablet: 3,
    desktop: 4,
  },
  breakpoints: {
    tablet: 768,
    desktop: 1024,
  },
};

export const useMasonryLayout = (itemsCount: number, config: MasonryLayoutConfig = DEFAULT_MASONRY_CONFIG, updateDelay: number = 250) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getColumnCountForWidth = useCallback(
    (containerWidth: number): number => {
      if (containerWidth < config.breakpoints.tablet) {
        return config.columns.mobile;
      }
      if (containerWidth < config.breakpoints.desktop) {
        return config.columns.tablet;
      }
      return config.columns.desktop;
    },
    [config],
  );

  const updateLayout = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const items = Array.from(container.children) as HTMLElement[];
    const { gap } = config;
    const containerWidth = container.offsetWidth;
    const columnCount = getColumnCountForWidth(containerWidth);
    const columnWidth = (containerWidth - gap * (columnCount - 1)) / columnCount;
    const columnHeights = new Array(columnCount).fill(0);

    items.forEach((item, index) => {
      const isFirstRow = index < columnCount;

      if (isFirstRow) {
        item.style.position = 'absolute';
        item.style.left = `${index * (columnWidth + gap)}px`;
        item.style.top = '0px';
        item.style.width = `${columnWidth}px`;

        const mediaElement = item.querySelector('img, video') as HTMLImageElement | HTMLVideoElement;
        if (mediaElement) {
          mediaElement.onload = () => updateLayout();
        }

        columnHeights[index] = item.offsetHeight + gap;
        return;
      }

      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));

      item.style.position = 'absolute';
      item.style.left = `${shortestColumnIndex * (columnWidth + gap)}px`;
      item.style.top = `${columnHeights[shortestColumnIndex]}px`;
      item.style.width = `${columnWidth}px`;

      columnHeights[shortestColumnIndex] += item.offsetHeight + gap;
    });

    container.style.height = `${Math.max(...columnHeights)}px`;
  }, [config, getColumnCountForWidth]);

  // Update layout when items count changes
  useEffect(() => {
    const layoutTimer = setTimeout(() => {
      updateLayout();
    }, updateDelay);

    return () => clearTimeout(layoutTimer);
  }, [itemsCount, updateLayout, updateDelay]);

  // Handle window resize
  useEffect(() => {
    const handleWindowResize = () => updateLayout();

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [updateLayout]);

  return {
    containerRef,
    updateLayout,
  };
};
