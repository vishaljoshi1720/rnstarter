/* eslint-disable react-refresh/only-export-components */
import type { ImgProps } from './types';
import { Image as NImage } from 'expo-image';
import * as React from 'react';

export type { ImgProps } from './types';

export function Image({
  style,
  placeholder = 'L6PZfSi_.AyE_3t7t7R**0o#DgR4',
  ...props
}: ImgProps) {
  return (
    <NImage
      placeholder={placeholder}
      style={style}
      {...props}
    />
  );
}

export function preloadImages(sources: string[]) {
  NImage.prefetch(sources);
}
