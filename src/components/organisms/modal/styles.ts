import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  handle: {
    marginTop: theme.marginY.sm,
    marginBottom: theme.marginY['2xl'],
    height: theme.sizeH.handle,
    width: theme.sizeW.handle,
    alignSelf: 'center',
    borderRadius: theme.radius.xs,
    backgroundColor: theme.colors.modalHandle,
  },
  headerRow: {
    flexDirection: 'row',
    paddingHorizontal: theme.paddingX.sm,
    paddingVertical: theme.paddingY.lg,
  },
  headerSpacer: { width: theme.size.md, height: theme.size.md },
  headerTitleWrap: { flex: 1 },
  headerTitle: {
    textAlign: 'center',
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.modalTitleText,
  },
  closeButton: {
    position: 'absolute',
    top: theme.paddingY.md,
    right: theme.paddingX.md,
    width: theme.size.md,
    height: theme.size.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detached: {
    marginHorizontal: theme.marginX.lg,
    overflow: 'hidden',
  },
}));
