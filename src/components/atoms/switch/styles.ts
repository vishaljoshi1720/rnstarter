import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  track: {
    width: theme.sizeRaw.switch.width,
    height: theme.sizeRaw.switch.height,
    borderRadius: theme.radius.full,
    justifyContent: 'center',
    padding: theme.spacing['2xs'],
  },
  trackOff: {
    backgroundColor: theme.colors.border.default,
  },
  trackOn: {
    backgroundColor: theme.colors.brand.primary,
  },
  trackDisabled: {
    backgroundColor: theme.colors.border.disabled,
    opacity: theme.opacity[40],
  },
  thumb: {
    width: theme.sizeRaw.switch.thumb,
    height: theme.sizeRaw.switch.thumb,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.surface.default,
  },
  thumbOff: {
    transform: [{ translateX: 0 }],
  },
  thumbOn: {
    transform: [{ translateX: theme.sizeRaw.switch.width - theme.sizeRaw.switch.thumb - theme.spacingRaw.xs * 2 }],
  },
  label: {
    fontSize: theme.typography.bodyMedium.fontSize,
    fontWeight: theme.typography.bodyMedium.fontWeight,
    fontFamily: theme.typography.bodyMedium.fontFamily,
    color: theme.colors.text.primary,
  },
  labelDisabled: {
    color: theme.colors.text.disabled,
  },
}));
