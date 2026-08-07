import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import * as React from 'react';
import { View } from 'react-native';
import { AppText } from '@/components';
import { playgroundStyles } from './styles';

export function Section({
  title,
  children,
  style,
}: {
  title: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[playgroundStyles.section, style]}>
      <AppText variant="titleMedium" style={playgroundStyles.sectionTitle}>
        {title}
      </AppText>
      {children}
    </View>
  );
}
