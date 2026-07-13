import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.paddingX.lg,
    paddingVertical: theme.paddingY.sm,
  },
  left: { flexDirection: 'row', alignItems: 'center' },
  iconWrap: { paddingRight: theme.paddingX.sm },
  right: { flexDirection: 'row', alignItems: 'center' },
  valueText: {
    color: theme.colors.settingsValueText,
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize.md,
  },
  arrowWrap: { paddingLeft: theme.paddingX.sm },
}));
