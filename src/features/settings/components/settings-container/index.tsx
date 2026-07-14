import type { SettingsContainerProps } from './types';

import * as React from 'react';
import { AppText, View } from '@/components';
import { styles } from './styles';

export type { SettingsContainerProps } from './types';

export function SettingsContainer({ children, title }: SettingsContainerProps) {
  return (
    <>
      {title && (
        <AppText
          variant="labelLarge"
          color="secondary"
          style={styles.title}
          tx={title}
        />
      )}
      <View style={styles.container}>
        {children}
      </View>
    </>
  );
}
