/**
 * Ambient shims for packages that resolve to broken .ts sources under tsc
 * (react-native export condition → unistyles/src).
 */
declare module 'react-native-unistyles/mocks';

declare module '@react-native/normalize-colors' {
  export default function normalizeColor(color: string | number): number | null;
}
