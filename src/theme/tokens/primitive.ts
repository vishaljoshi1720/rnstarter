/**
 * Primitive Design Tokens
 *
 * Raw color values - no computation, no theme awareness.
 * These are the foundational colors referenced by semantic tokens.
 */

export const primitive = {
  // Transparent
  transparent: 'transparent',

  // Pure black and white
  black: '#000000',
  white: '#FFFFFF',

  // Neutral grayscale (general purpose)
  neutral50: '#FAFAFA',
  neutral100: '#F5F5F5',
  neutral200: '#E5E5E5',
  neutral300: '#D4D4D4',
  neutral400: '#A3A3A3',
  neutral500: '#737373',
  neutral600: '#525252',
  neutral700: '#404040',
  neutral800: '#262626',
  neutral900: '#171717',
  neutral950: '#0A0A0A',

  // Slate grayscale (cooler tones)
  slate50: '#F8FAFC',
  slate100: '#F1F5F9',
  slate200: '#E2E8F0',
  slate300: '#CBD5E1',
  slate400: '#94A3B8',
  slate500: '#64748B',
  slate600: '#475569',
  slate700: '#334155',
  slate800: '#1E293B',
  slate900: '#0F172A',
  slate950: '#020617',

  // Gray grayscale (balanced)
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  gray950: '#030712',

  // Brand Primary (yellow/gold) - #FEC400 base
  primary50: '#FFFBEB',
  primary100: '#FEF3C7',
  primary200: '#FDE68A',
  primary300: '#FCD34D',
  primary400: '#FEC400',
  primary500: '#F59E0B',
  primary600: '#D97706',
  primary700: '#B45309',
  primary800: '#92400E',
  primary900: '#78350F',
  primary950: '#451A03',

  // Brand Secondary (crimson/red) - #B7083C base
  secondary50: '#FFF1F2',
  secondary100: '#FFE4E6',
  secondary200: '#FECDD3',
  secondary300: '#FDA4AF',
  secondary400: '#FB7185',
  secondary500: '#F43F5E',
  secondary600: '#E11D48',
  secondary700: '#BE123C',
  secondary800: '#B7083C',
  secondary900: '#881337',
  secondary950: '#4C0519',

  // Success (green)
  success50: '#F0FDF4',
  success100: '#DCFCE7',
  success200: '#BBF7D0',
  success300: '#86EFAC',
  success400: '#4ADE80',
  success500: '#22C55E',
  success600: '#16A34A',
  success700: '#15803D',
  success800: '#166534',
  success900: '#14532D',
  success950: '#052E16',

  // Warning (amber)
  warning50: '#FFFBEB',
  warning100: '#FEF3C7',
  warning200: '#FDE68A',
  warning300: '#FCD34D',
  warning400: '#FBBF24',
  warning500: '#F59E0B',
  warning600: '#D97706',
  warning700: '#B45309',
  warning800: '#92400E',
  warning900: '#78350F',
  warning950: '#451A03',

  // Error (red)
  error50: '#FEF2F2',
  error100: '#FEE2E2',
  error200: '#FECACA',
  error300: '#FCA5A5',
  error400: '#F87171',
  error500: '#EF4444',
  error600: '#DC2626',
  error700: '#B91C1C',
  error800: '#991B1B',
  error900: '#7F1D1D',
  error950: '#450A0A',

  // Info (blue)
  info50: '#EFF6FF',
  info100: '#DBEAFE',
  info200: '#BFDBFE',
  info300: '#93C5FD',
  info400: '#60A5FA',
  info500: '#3B82F6',
  info600: '#2563EB',
  info700: '#1D4ED8',
  info800: '#1E40AF',
  info900: '#1E3A8A',
  info950: '#172554',
} as const;
