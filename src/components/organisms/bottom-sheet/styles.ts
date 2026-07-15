import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  handle: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing['2xl'],
    height: theme.size.handle.height,
    width: theme.size.handle.width,
    alignSelf: 'center',
    borderRadius: theme.radius.xs,
    backgroundColor: theme.colors.border.default,
  },
  headerRow: {
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.lg,
  },
  headerSpacer: { width: theme.icon.md, height: theme.icon.md },
  headerTitleWrap: { flex: 1 },
  headerTitle: {
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing.md,
    right: theme.spacing.md,
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
