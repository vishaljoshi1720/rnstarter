import type { AppImageProps } from './types';

import { Image as ExpoImage } from 'expo-image';
import * as React from 'react';

export type { AppImageProps } from './types';

/**
 * Standard image atom — Expo Image with disk+memory caching by default.
 */
export function Image({
  source,
  style,
  contentFit = 'cover',
  placeholder,
  cachePolicy = 'memory-disk',
  transition = 200,
  recyclingKey,
  testID,
  accessibilityLabel,
  ...props
}: AppImageProps) {
  return (
    <ExpoImage
      source={source}
      style={style}
      contentFit={contentFit}
      placeholder={placeholder}
      cachePolicy={cachePolicy}
      transition={transition}
      recyclingKey={recyclingKey}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessible={Boolean(accessibilityLabel)}
      {...props}
    />
  );
}

Image.displayName = 'Image';
