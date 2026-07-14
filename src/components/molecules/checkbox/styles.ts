import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  rootDisabled: { opacity: theme.opacity[50] },
  checkboxIcon: {
    width: theme.size.checkbox.default,
    height: theme.size.checkbox.default,
    borderRadius: theme.radius.sm,
    borderWidth: theme.borderWidth.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioIcon: {
    width: theme.size.radio.default,
    height: theme.size.radio.default,
    borderRadius: theme.radius.full,
    borderWidth: theme.borderWidth.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    width: theme.size.radio.dot,
    height: theme.size.radio.dot,
    borderRadius: theme.radius.full,
  },
  switchTrackWrap: {
    width: theme.size.switch.width,
    height: theme.size.switch.height,
    borderRadius: theme.radius.full,
    overflow: 'hidden',
    position: 'relative',
  },
  switchTrackClip: {
    width: theme.size.switch.width,
    height: theme.size.switch.height,
    borderRadius: theme.radius.full,
    overflow: 'hidden',
  },
}));
