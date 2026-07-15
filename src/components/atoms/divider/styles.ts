import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  horizontal: {
    height: theme.borderWidth.hairline,
    width: '100%',
    backgroundColor: theme.colors.border.default,
  },
  vertical: {
    width: theme.borderWidth.hairline,
    height: '100%',
    backgroundColor: theme.colors.border.default,
  },
}));
