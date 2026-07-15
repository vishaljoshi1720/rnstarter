/* eslint-disable react-refresh/only-export-components */
import type { AxiosError } from 'axios';
import { Dimensions, Platform } from 'react-native';
import { toast } from 'sonner-native';

import { translate } from '@/lib/i18n';

export {
  fs,
  hs,
  moderateScale,
  moderateVerticalScale,
  mvs,
  S,
  scale,
  sp,
  verticalScale,
  ws,
} from '@/theme';

export const IS_IOS = Platform.OS === 'ios';
const { width, height } = Dimensions.get('screen');

export const WIDTH = width;
export const HEIGHT = height;

// for onError react queries and mutations
export function showError(error: AxiosError) {
  console.error(error?.response?.data);
  const description = extractError(error?.response?.data).trimEnd();

  toast.error(translate('common.error'), {
    description,
    duration: 4000,
  });
}

export function showErrorMessage(
  message: string = translate('common.something_went_wrong'),
) {
  toast.error(message, {
    duration: 4000,
  });
}

export function extractError(data: unknown): string {
  if (typeof data === 'string') {
    return data;
  }
  if (Array.isArray(data)) {
    const messages = data.map((item) => {
      return `  ${extractError(item)}`;
    });

    return `${messages.join('')}`;
  }

  if (typeof data === 'object' && data !== null) {
    const messages = Object.entries(data).map((item) => {
      const [key, value] = item;
      const separator = Array.isArray(value) ? ':\n ' : ': ';

      return `- ${key}${separator}${extractError(value)} \n `;
    });
    return `${messages.join('')} `;
  }
  return translate('common.something_went_wrong');
}
