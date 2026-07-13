import * as React from 'react';

import { FocusAwareStatusBar, Screen, Text } from '@/components';
import { styles } from './styles';

export function HomeScreen() {
  return (
    <Screen edges={['top', 'left', 'right']} style={styles.container}>
      <FocusAwareStatusBar />
      <Text style={styles.title} tx="home.title" />
      <Text style={styles.subtitle} tx="home.subtitle" />
    </Screen>
  );
}
