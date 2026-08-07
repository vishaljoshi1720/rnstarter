import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface.default,
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.colors.border.default,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    minHeight: theme.size.input.md,
    gap: theme.spacing.sm,
  },
  inputContainerError: {
    borderColor: theme.colors.status.error,
  },
  inputContainerDisabled: {
    backgroundColor: theme.colors.background.tertiary,
    opacity: theme.opacity.disabled,
  },
  inputPressed: {
    opacity: 0.7,
  },
  inputText: {
    flex: 1,
  },
}));
