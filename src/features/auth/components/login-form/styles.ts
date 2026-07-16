import { StyleSheet } from 'react-native-unistyles';

import { ws } from '@/theme/normalize';

export const styles = StyleSheet.create(theme => ({
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing['2xl'],
    gap: theme.spacing.sm,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
  },
  title: {
    paddingBottom: theme.spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: theme.spacing.xl,
    maxWidth: ws(320),
    textAlign: 'center',
  },
}));
