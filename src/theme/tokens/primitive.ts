/**
 * Primitive Design Tokens
 */

export const primitive = {
  transparent: 'transparent',
  black: '#000000',
  white: '#FFFFFF',

  // Warm neutral (base grayscale — replaces stark neutral/slate/gray)
  neutral50: '#FAF9F6',
  neutral100: '#F2F0EA',
  neutral200: '#E4E1D8',
  neutral300: '#CFCBBE',
  neutral400: '#A6A29B',
  neutral500: '#6B675F',
  neutral600: '#4A473F',
  neutral700: '#333136',
  neutral800: '#242327',
  neutral900: '#1C1B1E',
  neutral950: '#131214',

  // Brand Primary (muted indigo) - #5B5A8C base
  primary50: '#EFEEF7',
  primary100: '#DBD9EE',
  primary200: '#B8B5DD',
  primary300: '#9C9AD6',
  primary400: '#7C79B8',
  primary500: '#5B5A8C',
  primary600: '#4A4977',
  primary700: '#3B3A61',
  primary800: '#2C2B49',
  primary900: '#1E1D33',
  primary950: '#131220',

  // Brand Secondary (warm clay) - #C1694A base
  secondary50: '#FBF0EB',
  secondary100: '#F5DACB',
  secondary200: '#EBB595',
  secondary300: '#E08A68',
  secondary400: '#CD7857',
  secondary500: '#C1694A',
  secondary600: '#A2543A',
  secondary700: '#82422E',
  secondary800: '#623122',
  secondary900: '#432217',
  secondary950: '#2A150E',

  // Success (muted green)
  success50: '#EEF5F0',
  success100: '#D3E6D9',
  success200: '#A8CDB4',
  success300: '#7FB697',
  success400: '#639879',
  success500: '#4C7A5E',
  success600: '#3D624B',
  success700: '#2F4B3A',
  success800: '#22362A',
  success900: '#16241C',
  success950: '#0D1611',

  // Warning (muted amber)
  warning50: '#FBF3E7',
  warning100: '#F3E0BF',
  warning200: '#E7C185',
  warning300: '#E0AE6E',
  warning400: '#CC9C57',
  warning500: '#B98A3E',
  warning600: '#977032',
  warning700: '#745726',
  warning800: '#523E1A',
  warning900: '#332710',
  warning950: '#1E170A',

  // Error (muted red)
  error50: '#FAECEA',
  error100: '#F0CDC8',
  error200: '#E29E95',
  error300: '#E27D72',
  error400: '#C75F52',
  error500: '#B5453A',
  error600: '#93372E',
  error700: '#712A23',
  error800: '#501E19',
  error900: '#32130F',
  error950: '#1D0B09',

  // Info (muted blue — for links, not brand)
  info50: '#EAF0F6',
  info100: '#C7DAEA',
  info200: '#95BAD9',
  info300: '#6FA0C9',
  info400: '#4F84AF',
  info500: '#3A6B93',
  info600: '#2E5476',
  info700: '#233F5A',
  info800: '#182B3E',
  info900: '#0E1A26',
  info950: '#080F16',
} as const;
