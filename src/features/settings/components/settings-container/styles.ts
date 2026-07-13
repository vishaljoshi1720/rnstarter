import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  title: {
    paddingTop: theme.paddingY.lg,
    paddingBottom: theme.paddingY.sm,
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize.lg,
  },
  container: {
    borderRadius: theme.radius.md,
    borderWidth: theme.borderWidth.thin,
    borderColor: theme.colors.settingsBorder,
    backgroundColor: theme.colors.settingsContainerBg,
  },
}));
