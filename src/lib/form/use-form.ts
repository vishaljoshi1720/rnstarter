import type { UseFormProps, UseFormReturn } from 'react-hook-form';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useRHFForm } from 'react-hook-form';

export function useForm<TSchema extends z.ZodType<any, any, any>>(
  schema: TSchema,
  options?: Omit<UseFormProps<z.infer<TSchema>>, 'resolver'>,
): UseFormReturn<z.infer<TSchema>> {
  // @ts-expect-error - zodResolver type mismatch with react-hook-form generics
  return useRHFForm<z.infer<TSchema>>({
    // @ts-expect-error - zodResolver type mismatch with react-hook-form generics
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    ...options,
  });
}
