import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  emptyRoot: {
    minHeight: 400,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    paddingTop: theme.spacing.lg,
    textAlign: 'center',
  },
}));
