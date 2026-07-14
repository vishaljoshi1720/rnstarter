import type { ReactNode } from 'react';
import * as React from 'react';
import { View } from '../view';
import { styles } from './styles';

type IconWrapperProps = {
  children: ReactNode;
  position: 'left' | 'right';
  size: number;
};

/**
 * Wraps button icons for consistent spacing and alignment.
 * Prevents layout shift and ensures proper vertical centering.
 */
export function IconWrapper({ children, position, size }: IconWrapperProps) {
  if (!children)
    return null;

  return (
    <View
      style={[
        styles.iconWrapper,
        { width: size, height: size },
        position === 'left' && styles.iconLeft,
        position === 'right' && styles.iconRight,
      ]}
    >
      {children}
    </View>
  );
}
