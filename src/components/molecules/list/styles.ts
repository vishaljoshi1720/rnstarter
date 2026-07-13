import { StyleSheet } from 'react-native-unistyles';

import { vs } from '@/common/utils/scale';

export const styles = StyleSheet.create(theme => ({
  emptyRoot: {
    minHeight: vs(400),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    paddingTop: theme.paddingY.lg,
    textAlign: 'center',
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize.md,
  },
}));
