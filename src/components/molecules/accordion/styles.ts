import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    borderRadius: theme.radius.md,
    overflow: 'hidden',
  },
  item: {
    borderBottomWidth: theme.borderWidth.hairline,
    borderBottomColor: theme.colors.border.default,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.surface.default,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  chevron: {
    fontSize: theme.icon.md,
  },
  chevronExpanded: {
    transform: [{ rotate: '180deg' }],
  },
  content: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background.secondary,
  },
  disabled: {
    opacity: theme.opacity[50],
  },
}));
