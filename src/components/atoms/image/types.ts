import type { ImageProps as ExpoImageProps } from 'expo-image';
import type { ImageStyle, StyleProp } from 'react-native';

export type AppImageProps = {
  source: ExpoImageProps['source'];
  style?: StyleProp<ImageStyle>;
  /**
   * How the image should be resized. Maps to expo-image `contentFit`.
   * @default 'cover'
   */
  contentFit?: ExpoImageProps['contentFit'];
  /** Placeholder while loading (blurhash / thumbhash / color / image). */
  placeholder?: ExpoImageProps['placeholder'];
  /**
   * Cache policy. Default `memory-disk` for production media.
   * @default 'memory-disk'
   */
  cachePolicy?: ExpoImageProps['cachePolicy'];
  /** Transition duration in ms when the image appears. */
  transition?: ExpoImageProps['transition'];
  recyclingKey?: string;
  testID?: string;
  accessibilityLabel?: string;
} & Omit<
  ExpoImageProps,
  | 'source'
  | 'style'
  | 'contentFit'
  | 'placeholder'
  | 'cachePolicy'
  | 'transition'
  | 'recyclingKey'
  | 'testID'
  | 'accessibilityLabel'
>;
