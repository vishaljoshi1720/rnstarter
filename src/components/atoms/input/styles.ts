import { StyleSheet } from 'react-native-unistyles';

import { ms } from '@/common/utils/scale';

export const styles = StyleSheet.create(theme => ({
  container: { marginBottom: theme.marginY.sm },
  label: {
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize.lg,
    marginBottom: theme.marginY.xs,
    color: theme.colors.labelText,
  },
  labelError: { color: theme.colors.danger600 },
  input: {
    fontFamily: theme.fontFamily.sans,
    borderRadius: theme.radius.lg,
    borderWidth: theme.borderWidth.hairline,
    borderColor: theme.colors.inputBorder,
    backgroundColor: theme.colors.inputBg,
    paddingHorizontal: theme.paddingX.lg,
    paddingVertical: theme.paddingY.md,
    fontSize: theme.fontSize.md,
    lineHeight: ms(20),
    fontWeight: theme.fontWeight.medium,
    color: theme.colors.inputText,
  },
  inputFocused: { borderColor: theme.colors.inputFocusBorder },
  inputError: { borderColor: theme.colors.danger600 },
  inputDisabled: { backgroundColor: theme.colors.neutral200 },
  errorText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.danger400,
  },
}));
