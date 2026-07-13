import * as z from 'zod';

import { translate } from '@/lib/i18n';

export const schema = z.object({
  name: z.string().optional(),
  email: z
    .string({
      message: translate('login.email_required'),
    })
    .min(1, translate('login.email_required'))
    .email(translate('login.email_invalid')),
  password: z
    .string({
      message: translate('login.password_required'),
    })
    .min(1, translate('login.password_required'))
    .min(6, translate('login.password_min')),
});
