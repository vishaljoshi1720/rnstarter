import { StyleSheet } from 'react-native-unistyles';

export const playgroundStyles = StyleSheet.create(theme => ({
  title: {
    marginBottom: theme.spacing.sm,
  },
  intro: {
    marginBottom: theme.spacing.xl,
  },
  section: {
    marginBottom: theme.spacing['2xl'],
    gap: theme.spacing.md,
  },
  sectionTitle: {
    marginBottom: theme.spacing.xs,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
    alignItems: 'center',
  },
  sheetButton: {
    marginTop: theme.spacing.lg,
  },
  sheetBody: {
    paddingHorizontal: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    gap: theme.spacing.md,
  },
  sheetFooterActions: {
    gap: theme.spacing.sm,
  },
  image: {
    width: '100%',
    height: theme.size.input.lg * 4,
    borderRadius: theme.radius.md,
  },
  backButton: {
    transform: [{ scaleX: -1 }],
  },
}));
