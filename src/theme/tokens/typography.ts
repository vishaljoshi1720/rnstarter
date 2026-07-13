import { ms, scaleTokens } from '@/common/utils/scale';

export const fontFamily = {
  sans: 'Inter',
};

const fontSizeBase = {
  'xs': 12,
  'sm': 14,
  'md': 16,
  'lg': 18,
  'xl': 20,
  '2xl': 24,
  '3xl': 36,
  '4xl': 48,
};

/** Font sizes — ms() */
export const fontSize = scaleTokens(fontSizeBase, ms);

type FontWeightValue = '400' | '500' | '600' | '700';

export const fontWeight: Record<'regular' | 'medium' | 'semibold' | 'bold', FontWeightValue> = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};
