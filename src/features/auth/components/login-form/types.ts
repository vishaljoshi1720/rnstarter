import type * as z from 'zod';

import type { schema } from './constants';

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
  onSubmit?: (data: FormType) => void;
};
