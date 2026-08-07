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
  sheetInput: {
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.colors.border.default,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    color: theme.colors.text.primary,
    backgroundColor: theme.colors.surface.default,
    fontSize: theme.typography.bodyMedium.fontSize,
  },
  sheetInputMultiline: {
    minHeight: theme.size.input.lg * 2,
    textAlignVertical: 'top',
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
