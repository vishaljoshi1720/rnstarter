import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
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
    marginVertical: theme.spacing.md,
    textAlign: 'center',
    ...theme.typography.displaySmall,
  },
  tagline: {
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
    ...theme.typography.titleLarge,
    color: theme.colors.text.secondary,
  },
  featureFirst: {
    marginVertical: theme.spacing.xs,
    paddingTop: theme.spacing.xl,
    ...theme.typography.bodyLarge,
  },
  feature: {
    marginVertical: theme.spacing.xs,
    ...theme.typography.bodyLarge,
  },
  cta: {
    width: '100%',
    alignSelf: 'center',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.md,
  },
}));
