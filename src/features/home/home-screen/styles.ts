import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.paddingX.lg,
    paddingVertical: theme.paddingY.lg,
  },
  title: {
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize['2xl'],
    fontWeight: theme.fontWeight.bold,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: theme.marginY.sm,
    textAlign: 'center',
    color: theme.colors.subtitleText,
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize.md,
  },
}));
