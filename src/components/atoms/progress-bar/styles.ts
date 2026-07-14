import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  track: {
    width: '100%',
    height: theme.size.progressBar.height,
    backgroundColor: theme.colors.background.tertiary,
    borderRadius: theme.radius.full,
    overflow: 'hidden',
  },
}));
