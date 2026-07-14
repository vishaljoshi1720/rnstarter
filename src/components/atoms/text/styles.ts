import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  base: {
    ...theme.typography.bodyMedium,
    color: theme.colors.text.primary,
  },
}));
