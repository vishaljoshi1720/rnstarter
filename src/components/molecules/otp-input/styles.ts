import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  wrapper: {
    width: '100%',
    position: 'relative',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  input: {
    // Keep explicit height so absolute TextInput overlay stays tappable.
    // flexGrow distributes width; do NOT set height: undefined (collapses cells).
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: theme.size.input.lg,
    maxWidth: theme.size.input.lg + theme.spacing.md,
    borderWidth: theme.borderWidth.medium,
    borderColor: theme.colors.border.default,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface.default,
  },
  inputFocused: {
    borderColor: theme.colors.brand.primary,
  },
  inputError: {
    borderColor: theme.colors.status.error,
  },
  inputDisabled: {
    backgroundColor: theme.colors.background.secondary,
    opacity: theme.opacity[50],
  },
  inputText: {
    fontSize: theme.typography.titleMedium.fontSize,
    fontWeight: theme.fontWeight.semibold,
    color: theme.colors.text.primary,
    textAlign: 'center',
  },
}));
