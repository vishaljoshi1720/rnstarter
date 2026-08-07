import type { LoginFormProps } from './types';

import { useForm } from '@/lib/form';
import { schema } from './constants';

export function useLoginForm(onSubmit: NonNullable<LoginFormProps['onSubmit']> = () => {}) {
  const form = useForm(schema, {
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  return {
    control: form.control,
    submit: form.handleSubmit(onSubmit),
    isSubmitting: form.formState.isSubmitting,
  };
}
