import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(_theme => ({
  outer: {
    flex: 1,
  },
  fixedContent: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  formColumn: {
    flex: 1,
  },
  formFields: {
    flexGrow: 1,
  },
  stickyFooterShell: {
    width: '100%',
  },
}));
