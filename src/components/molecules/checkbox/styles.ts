import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rootDisabled: { opacity: 0.5 },
  label: { paddingLeft: theme.paddingX.sm },
  labelEnd: { paddingRight: theme.paddingX.sm },
  checkboxIcon: {
    height: theme.size.sm,
    width: theme.size.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.sm,
    borderWidth: theme.borderWidth.thick,
  },
  radioIcon: {
    height: theme.size.sm,
    width: theme.size.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.size.sm,
    borderWidth: theme.borderWidth.thick,
    backgroundColor: 'transparent',
  },
  radioDot: {
    width: theme.size.radioDot,
    height: theme.size.radioDot,
    borderRadius: theme.size.radioDot,
  },
  switchTrackWrap: {
    width: theme.sizeW.switchTrack,
    justifyContent: 'center',
  },
  switchTrackClip: { overflow: 'hidden', borderRadius: theme.radius.full },
}));
