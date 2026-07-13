import { useUnistyles } from 'react-native-unistyles';

/** App-owned wrapper around Unistyles theme access. */
export function useAppTheme() {
  return useUnistyles();
}
