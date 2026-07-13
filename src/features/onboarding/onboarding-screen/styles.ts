import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.paddingX.lg,
  },
  coverWrap: {
    width: '100%',
    flex: 1,
    alignSelf: 'center',
  },
  content: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  brand: {
    marginVertical: theme.marginY.md,
    textAlign: 'center',
    fontFamily: theme.fontFamily.sans,
    fontSize: {
      xs: theme.fontSize['4xl'],
      md: theme.fontSize['3xl'],
    },
    fontWeight: theme.fontWeight.bold,
  },
  tagline: {
    marginBottom: theme.marginY.sm,
    textAlign: 'center',
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize.lg,
    color: theme.colors.taglineText,
  },
  featureFirst: {
    marginVertical: theme.marginY.xs,
    paddingTop: theme.paddingY.xl,
    fontFamily: theme.fontFamily.sans,
    fontSize: {
      xs: theme.fontSize.lg,
      md: theme.fontSize.md,
    },
  },
  feature: {
    marginVertical: theme.marginY.xs,
    fontFamily: theme.fontFamily.sans,
    fontSize: {
      xs: theme.fontSize.lg,
      md: theme.fontSize.md,
    },
  },
  cta: {
    width: '100%',
    alignSelf: 'center',
    marginTop: theme.marginY.xl,
    marginBottom: theme.marginY.md,
  },
}));
