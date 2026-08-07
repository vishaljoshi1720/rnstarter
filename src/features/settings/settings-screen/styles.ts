import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  /**
   * Do NOT use alignItems:'center' here with full-width row children.
   * Yoga + Text-in-row under a centered parent causes mid-word wraps
   * ("Logou"/"t") even when the button is wide.
   */
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
  },
  title: {
    textAlign: 'center',
    width: '100%',
  },
  logout: {
    marginVertical: 0,
  },
}));
