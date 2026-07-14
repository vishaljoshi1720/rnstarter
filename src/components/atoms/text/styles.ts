import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create(theme => ({
  // Typography only — colors applied at runtime via useTheme (see AppText)
  displayLarge: { ...theme.typography.displayLarge },
  displayMedium: { ...theme.typography.displayMedium },
  displaySmall: { ...theme.typography.displaySmall },
  headlineLarge: { ...theme.typography.headlineLarge },
  headlineMedium: { ...theme.typography.headlineMedium },
  headlineSmall: { ...theme.typography.headlineSmall },
  titleLarge: { ...theme.typography.titleLarge },
  titleMedium: { ...theme.typography.titleMedium },
  titleSmall: { ...theme.typography.titleSmall },
  bodyXL: { ...theme.typography.bodyXL },
  bodyLarge: { ...theme.typography.bodyLarge },
  bodyMedium: { ...theme.typography.bodyMedium },
  bodySmall: { ...theme.typography.bodySmall },
  labelLarge: { ...theme.typography.labelLarge },
  labelMedium: { ...theme.typography.labelMedium },
  labelSmall: { ...theme.typography.labelSmall },
  caption: { ...theme.typography.caption },
  overline: { ...theme.typography.overline },
}));
