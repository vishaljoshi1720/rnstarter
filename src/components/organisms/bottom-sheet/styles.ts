import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  handle: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
    height: theme.size.handle.height,
    width: theme.size.handle.width,
    alignSelf: 'center',
    borderRadius: theme.radius.xs,
    backgroundColor: theme.colors.border.default,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
    minHeight: theme.size.button.sm,
  },
  headerRowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
  },
  headerSpacer: {
    width: theme.icon.md,
    height: theme.icon.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerAction: {
    alignItems: 'flex-end',
  },
  headerTitleWrap: { flex: 1, justifyContent: 'center' },
  headerTitle: {
    textAlign: 'center',
  },
  closeButton: {
    width: theme.icon.md,
    height: theme.icon.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detached: {
    marginHorizontal: theme.spacing.lg,
    overflow: 'hidden',
  },
}));
