import type { AvatarProps } from './types';

import * as React from 'react';
import { AppText, Image, View } from '@/components';
import { SIZE_CONFIG } from './constants';
import { styles } from './styles';

export type { AvatarProps, AvatarSize } from './types';

function getInitials(name: string): string {
  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({
  source,
  name,
  size = 'md',
  variant = 'circle',
  style,
  testID,
  accessibilityLabel,
}: AvatarProps) {
  const sizeConfig = SIZE_CONFIG[size];
  const variantStyle = variant === 'circle' ? styles.circle : styles.square;

  const containerStyle = [
    styles.container,
    sizeConfig.containerStyle,
    variantStyle,
    style,
  ];

  return (
    <View
      style={containerStyle}
      testID={testID}
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel || name}
    >
      {source
        ? (
            <Image
              source={source}
              style={styles.image}
              testID={testID ? `${testID}-image` : undefined}
            />
          )
        : name
          ? (
              <AppText
                variant="labelLarge"
                color="secondary"
                style={[styles.fallback, { fontSize: sizeConfig.fontSize }]}
              >
                {getInitials(name)}
              </AppText>
            )
          : (
              <AppText
                variant="labelLarge"
                color="secondary"
                style={[styles.fallback, { fontSize: sizeConfig.fontSize }]}
              >
                ?
              </AppText>
            )}
    </View>
  );
}

Avatar.displayName = 'Avatar';
