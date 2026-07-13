import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    paddingHorizontal: theme.paddingX.lg,
    paddingTop: theme.paddingY.lg,
  },
  title: {
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.bold,
  },
  logoutContainer: { marginVertical: theme.marginY['2xl'] },
}));
