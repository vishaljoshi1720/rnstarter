import * as React from 'react';
import { z } from 'zod';
import {
  Button,
  Screen,
  useModal,
} from '@/components';
import { Icon } from '@/components/atoms/icon';
import { useForm } from '@/lib/form';
import { toast } from '@/lib/toast';
import { useAppNavigation } from '@/shared/hooks';
import { AtomsSection } from './sections/atoms-section';
import { FormSection } from './sections/form-section';
import { MoleculesSection } from './sections/molecules-section';
import { SheetModals } from './sections/sheet-modals';
import { playgroundStyles } from './styles';

const DEMO_OPTIONS = [
  { label: 'Alpha', value: 'alpha' },
  { label: 'Beta', value: 'beta' },
  { label: 'Gamma', value: 'gamma' },
];

const playgroundSchema = z.object({
  email: z.string().email('Enter a valid email'),
  country: z.string().min(1, 'Pick a country'),
  interests: z.array(z.union([z.string(), z.number()])).min(1, 'Pick at least one'),
  role: z.string().min(1, 'Pick a role'),
  otp: z.string().length(6, 'Enter the 6-digit code'),
  features: z.array(z.string()).min(1, 'Pick a feature'),
  accept: z.boolean().refine(v => v === true, { message: 'Accept the terms' }),
  startDate: z.date().optional(),
  reminder: z.date().optional(),
  notifications: z.boolean(),
});

/**
 * __DEV__-only kit gallery. Exercise states / keyboard / sheet / form wiring
 * without shipping a production surface.
 */
export function PlaygroundScreen() {
  const modal = useModal();
  const formModal = useModal();
  const { goBack } = useAppNavigation();
  const [loading, setLoading] = React.useState(false);

  const { control, handleSubmit, formState } = useForm(playgroundSchema, {
    defaultValues: {
      email: '',
      country: '',
      interests: [],
      role: '',
      otp: '',
      features: [],
      accept: false,
      notifications: true,
    },
  });

  const finishLoading = React.useCallback(() => setLoading(false), []);

  const onSubmit = handleSubmit(() => {
    setLoading(true);
    toast.success('Form valid', { description: 'Controlled wrappers OK' });
    setTimeout(finishLoading, 800);
  });

  return (
    <Screen
      layout="form"
      inset={{ horizontal: 'xl', vertical: 'lg' }}
      header={{
        title: 'Component playground',
        leftAction: (
          <Button
            size="icon"
            variant="ghost"
            leftIcon={<Icon name="arrow-right" />}
            accessibilityLabel="Back"
            onPress={goBack}
            style={playgroundStyles.backButton}
          />
        ),
        rightAction: (
          <Button
            size="sm"
            variant="ghost"
            label="Toast"
            onPress={() => toast('Hello from playground')}
          />
        ),
        testID: 'playground-header',
      }}
      footer={{
        content: (
          <Button
            fullWidth
            label={formState.isSubmitSuccessful ? 'Submitted' : 'Submit form kit'}
            loading={loading}
            onPress={onSubmit}
            testID="playground-submit"
          />
        ),
      }}
      testID="playground-screen"
    >
      <AtomsSection />
      <MoleculesSection
        options={DEMO_OPTIONS}
        onOpenSheet={() => modal.present()}
        onOpenSheetForm={() => formModal.present()}
      />
      <FormSection control={control} options={DEMO_OPTIONS} />

      <SheetModals
        simpleRef={modal.ref}
        formRef={formModal.ref}
        onDismissSimple={() => modal.dismiss()}
        onDismissForm={() => formModal.dismiss()}
      />
    </Screen>
  );
}

PlaygroundScreen.displayName = 'PlaygroundScreen';
