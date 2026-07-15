import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  verticalXs: { height: theme.spacing.xs },
  verticalSm: { height: theme.spacing.sm },
  verticalMd: { height: theme.spacing.md },
  verticalLg: { height: theme.spacing.lg },
  verticalXl: { height: theme.spacing.xl },
  vertical2xl: { height: theme.spacing['2xl'] },

  horizontalXs: { width: theme.spacing.xs },
  horizontalSm: { width: theme.spacing.sm },
  horizontalMd: { width: theme.spacing.md },
  horizontalLg: { width: theme.spacing.lg },
  horizontalXl: { width: theme.spacing.xl },
  horizontal2xl: { width: theme.spacing['2xl'] },
}));
