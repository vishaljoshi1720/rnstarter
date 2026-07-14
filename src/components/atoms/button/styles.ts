import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.md,
    marginVertical: theme.marginY.sm,
    paddingHorizontal: theme.paddingX.lg,
    height: theme.sizeH.buttonMd,
    gap: theme.gap.sm,
  },
  variantDefault: { backgroundColor: theme.colors.buttonDefaultBg },
  variantSecondary: { backgroundColor: theme.colors.primary600 },
  variantOutline: {
    backgroundColor: 'transparent',
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.colors.neutral400,
  },
  variantDestructive: { backgroundColor: theme.colors.danger600 },
  variantGhost: { backgroundColor: 'transparent' },
  variantLink: { backgroundColor: 'transparent' },
  disabled: { backgroundColor: theme.colors.neutral300 },
  sizeLg: { height: theme.sizeH.buttonLg, paddingHorizontal: theme.paddingX['2xl'] },
  sizeSm: { height: theme.sizeH.buttonSm, paddingHorizontal: theme.paddingX.md },
  sizeDefault: {},
  sizeIcon: {
    height: theme.size.xl,
    width: theme.size.xl,
    paddingHorizontal: theme.paddingX.none,
  },
  selfCenter: { alignSelf: 'center' },
  loadingSpinner: {
    marginRight: theme.gap.sm,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: theme.gap.xs,
  },
  iconRight: {
    marginLeft: theme.gap.xs,
  },
  label: {
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semibold,
  },
  labelDefault: { color: theme.colors.buttonDefaultText },
  labelSecondary: { color: theme.colors.neutral600 },
  labelOutline: { color: theme.colors.buttonOutlineText },
  labelDestructive: { color: theme.colors.white },
  labelGhost: { color: theme.colors.buttonOutlineText },
  labelLink: { color: theme.colors.black },
  labelDisabled: { color: theme.colors.neutral600 },
  labelLg: { fontSize: theme.fontSize.xl },
  labelSm: { fontSize: theme.fontSize.sm },
  indicatorDisabled: { color: theme.colors.neutral400 },
}));
