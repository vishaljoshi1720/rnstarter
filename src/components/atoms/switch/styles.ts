import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  label: {
    flex: 1,
    flexShrink: 1,
  },
  track: {
    width: theme.sizeRaw.switch.width,
    height: theme.sizeRaw.switch.height,
    borderRadius: theme.radius.full,
    justifyContent: 'center',
    padding: theme.spacingRaw['2xs'],
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
    transform: [{ translateX: theme.sizeRaw.switch.width - theme.sizeRaw.switch.thumb - theme.spacingRaw['2xs'] * 2 }],
  },
}));
