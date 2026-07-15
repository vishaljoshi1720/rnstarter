import type { SkeletonProps } from './types';

import * as React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { styles } from './styles';

export type { SkeletonProps, SkeletonVariant } from './types';

export function Skeleton({
  variant = 'text',
  width,
  height,
  style,
  testID,
}: SkeletonProps) {
  const opacity = useSharedValue(1);

  React.useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.3, { duration: 800 }),
        withTiming(1, { duration: 800 }),
      ),
      -1,
      false,
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const variantStyle = variant === 'circular' ? styles.circular : styles.rectangular;

  const sizeStyle = React.useMemo(() => {
    const result: Record<string, number | string> = {};
    if (width !== undefined)
      result.width = width;
    if (height !== undefined)
      result.height = height;
    return result;
  }, [width, height]);

  return (
    <Animated.View
      style={[
        styles.base,
        variantStyle,
        sizeStyle,
        style,
        animatedStyle,
      ]}
      testID={testID}
      accessible={false}
    />
  );
}

Skeleton.displayName = 'Skeleton';
