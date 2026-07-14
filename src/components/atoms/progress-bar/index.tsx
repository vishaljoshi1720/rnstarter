import type { ProgressBarProps, ProgressBarRef } from './types';
import * as React from 'react';
import { useImperativeHandle } from 'react';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from '@/theme';
import { View } from '../view';
import { styles } from './styles';

export type { ProgressBarProps, ProgressBarRef } from './types';

export function ProgressBar({ ref, initialProgress = 0, style }: ProgressBarProps & { ref?: React.RefObject<ProgressBarRef | null> }) {
  const { theme } = useTheme();
  const fillColor = theme.colors.brand.primary;
  const fillHeight = theme.size.progressBar.height;
  const progress = useSharedValue<number>(initialProgress ?? 0);
  useImperativeHandle(ref, () => {
    return {
      setProgress: (value: number) => {
        progress.value = withTiming(value, {
          duration: 250,
          easing: Easing.inOut(Easing.quad),
        });
      },
    };
  }, [progress]);

  const animStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
      backgroundColor: fillColor,
      height: fillHeight,
    };
  });

  return (
    <View style={[styles.track, style]}>
      <Animated.View style={animStyle} />
    </View>
  );
}
