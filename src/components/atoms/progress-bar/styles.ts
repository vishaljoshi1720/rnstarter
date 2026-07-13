import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  track: {
    backgroundColor: theme.colors.progressTrack,
  },
  fill: {
    backgroundColor: theme.colors.progressFill,
    height: theme.sizeH.progress,
  },
}));
