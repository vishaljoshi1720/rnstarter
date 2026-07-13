import { StyleSheet } from 'react-native-unistyles';

import { s } from '@/common/utils/scale';

export const styles = StyleSheet.create(theme => ({
  keyboard: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: theme.paddingX.lg,
    paddingVertical: theme.paddingY.lg,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingBottom: theme.paddingY.xl,
    textAlign: 'center',
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize['3xl'],
    fontWeight: theme.fontWeight.bold,
  },
  subtitle: {
    marginBottom: theme.marginY.xl,
    maxWidth: s(320),
    textAlign: 'center',
    color: theme.colors.subtitleText,
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize.md,
  },
}));
