import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: { marginBottom: theme.spacing.md },
  label: {
    marginBottom: theme.spacing.sm,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: theme.radius.lg,
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.colors.border.default,
    backgroundColor: theme.colors.surface.default,
    minHeight: theme.size.input.lg,
  },
  inputContainerMultiline: {
    alignItems: 'flex-start',
    minHeight: 100,
  },
  inputContainerFocused: {
    borderColor: theme.colors.border.focus,
  },
  inputContainerError: {
    borderColor: theme.colors.status.error,
  },
  inputContainerDisabled: {
    backgroundColor: theme.colors.background.tertiary,
  },
  leftElement: {
    marginLeft: theme.spacing.sm,
  },
  rightElement: {
    marginRight: theme.spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: theme.typography.bodyMedium.fontSize,
    fontWeight: theme.typography.bodyMedium.fontWeight,
    fontFamily: theme.typography.bodyMedium.fontFamily,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  },
  inputMultiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  inputDisabled: {
    color: theme.colors.text.disabled,
  },
  clearButton: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.xs,
  },
  helperText: {
    marginTop: theme.spacing.xs,
  },
  characterCount: {
    marginTop: theme.spacing.xs,
    textAlign: 'right',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
