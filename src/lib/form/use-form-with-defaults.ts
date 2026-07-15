import type { UseFormProps, UseFormReturn } from 'react-hook-form';
import type { z } from 'zod';
import * as React from 'react';
import { useForm } from './use-form';

/**
 * Enhanced useForm with async default values support.
 * For forms that load data from API before rendering.
 *
 * Follows 2026 best practice: NEVER use defaultValue prop on controlled components.
 * Always use defaultValues in useForm or reset() method.
 */
export function useFormWithDefaults<
  TSchema extends z.ZodType<any, any, any>,
  TData = any,
>(
  schema: TSchema,
  options: {
    load: () => Promise<TData>;
    transform: (data: TData) => z.infer<TSchema>;
    onError?: (error: Error) => void;
  } & Omit<UseFormProps<z.infer<TSchema>>, 'resolver' | 'defaultValues'>,
): UseFormReturn<z.infer<TSchema>> & { isLoadingDefaults: boolean } {
  const { load, transform, onError, ...formOptions } = options;
  const form = useForm(schema, formOptions);
  const [isLoading, setIsLoading] = React.useState(true);
  const { reset } = form;

  React.useEffect(() => {
    let cancelled = false;

    load()
      .then((data) => {
        if (cancelled)
          return;
        reset(transform(data));
        setIsLoading(false);
      })
      .catch((error: Error) => {
        if (cancelled)
          return;
        onError?.(error);
        setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [load, transform, onError, reset]);

  return { ...form, isLoadingDefaults: isLoading };
}
