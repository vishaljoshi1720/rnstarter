import * as React from 'react';

import { AppText, Screen } from '@/components';
import { styles } from './styles';

export function HomeScreen() {
  return (
    <Screen contentStyle={styles.content} testID="home-screen">
      <AppText variant="headlineLarge" style={styles.title} tx="home.title" />
    </Screen>
  );
}
