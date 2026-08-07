import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  /** Full-bleed chrome — border lives here so hairline is edge-to-edge. */
  root: {
    width: '100%',
    backgroundColor: theme.colors.background.primary,
  },
  rootBordered: {
    borderBottomWidth: theme.borderWidth.hairline,
    borderBottomColor: theme.colors.border.default,
  },
  /** Horizontal inset only — never put border on this layer. */
  content: {
    width: '100%',
  },
  compact: {
    height: theme.size.button.md,
    justifyContent: 'center',
  },
  compactWithSubtitle: {
    height: undefined,
    minHeight: theme.size.button.md,
    paddingVertical: theme.spacing.xs,
    justifyContent: 'center',
  },
  large: {
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  side: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideEnd: {
    alignItems: 'flex-end',
  },
  /** Kill Button atom `marginVertical` inside nav actions. */
  actionControl: {
    marginVertical: 0,
  },
  titleCenter: {
    flex: 1,
    paddingHorizontal: theme.spacing['2xs'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  navSpacer: {
    flex: 1,
  },
  titleBlockLarge: {
    paddingRight: theme.spacing.sm,
  },
  titleCompact: {
    textAlign: 'center',
  },
  titleLarge: {
    textAlign: 'left',
    letterSpacing: -0.4,
  },
  subtitleCompact: {
    marginTop: theme.spacing['2xs'],
    textAlign: 'center',
  },
  subtitleLarge: {
    marginTop: theme.spacing['2xs'],
    textAlign: 'left',
  },
}));
