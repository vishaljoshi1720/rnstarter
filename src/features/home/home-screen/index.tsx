import * as React from 'react';

import { AppText, FocusAwareStatusBar, Screen } from '@/components';
import { styles } from './styles';

export function HomeScreen() {
  return (
    <Screen edges={['top', 'left', 'right']} style={styles.container}>
      <FocusAwareStatusBar />
      <AppText variant="headlineLarge" style={styles.title} tx="home.title" />
      <AppText
        variant="bodyMedium"
        color="secondary"
        style={styles.subtitle}
        tx="home.subtitle"
      />
    </Screen>
  );
}
