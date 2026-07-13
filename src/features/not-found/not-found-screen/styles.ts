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
    marginBottom: theme.marginY.lg,
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize['2xl'],
    fontWeight: theme.fontWeight.bold,
    textAlign: 'center',
  },
  link: {
    marginTop: theme.marginY.lg,
    color: theme.colors.linkText,
    textDecorationLine: 'underline',
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize.md,
    textAlign: 'center',
  },
}));
