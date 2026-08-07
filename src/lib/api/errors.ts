import type { AxiosError } from 'axios';
import { translate } from '@/lib/i18n';

import { toast } from '@/lib/toast';

/** Toast API / mutation errors. */
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
