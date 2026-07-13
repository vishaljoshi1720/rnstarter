import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: { marginBottom: theme.marginY.lg },
  label: {
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize.lg,
    marginBottom: theme.marginY.xs,
    color: theme.colors.labelText,
  },
  labelError: { color: theme.colors.danger600 },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.lg,
    borderWidth: theme.borderWidth.hairline,
    borderColor: theme.colors.inputBorder,
    paddingHorizontal: theme.paddingX.md,
    paddingVertical: theme.paddingY.md,
  },
  triggerError: { borderColor: theme.colors.danger600 },
  triggerDisabled: { backgroundColor: theme.colors.neutral200 },
  triggerValue: { color: theme.colors.bodyText },
  triggerValueError: { color: theme.colors.danger600 },
  triggerContent: { flex: 1 },
  errorText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.danger300,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: theme.borderWidth.thin,
    borderBottomColor: theme.colors.settingsBorder,
    backgroundColor: theme.colors.selectOptionBg,
    paddingHorizontal: theme.paddingX.md,
    paddingVertical: theme.paddingY.sm,
  },
  optionLabel: { flex: 1, color: theme.colors.bodyText },
}));
