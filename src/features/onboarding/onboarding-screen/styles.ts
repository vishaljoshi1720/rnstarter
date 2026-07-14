import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xl,
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
    gap: theme.spacing.xs,
    paddingBottom: theme.spacing.md,
  },
  brand: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  tagline: {
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  featureFirst: {
    marginTop: theme.spacing.lg,
    paddingTop: theme.spacing.md,
  },
  feature: {
    marginVertical: theme.spacing.xs,
  },
  cta: {
    width: '100%',
    alignSelf: 'center',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
  },
}));
