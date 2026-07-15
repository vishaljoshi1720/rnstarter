import type { FeedbackVariant } from './types';
import type { AppTextColor } from '@/components/atoms/text';

type VariantConfig = {
  titleColor: AppTextColor;
  defaultIconName?: string;
};

export const VARIANT_CONFIG: Record<FeedbackVariant, VariantConfig> = {
  empty: {
    titleColor: 'primary',
  },
  error: {
    titleColor: 'error',
    defaultIconName: 'support',
  },
  info: {
    titleColor: 'primary',
  },
};
