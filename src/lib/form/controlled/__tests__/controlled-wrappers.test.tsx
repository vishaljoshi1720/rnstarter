import * as React from 'react';
import { z } from 'zod';
import { Button } from '@/components';
import {
  ControlledDropdown,
  ControlledOTPInput,
  useForm,
} from '@/lib/form';
import { cleanup, screen, setup, waitFor } from '@/lib/test-utils';

afterEach(cleanup);

const schema = z.object({
  otp: z.string().length(6, 'OTP must be 6 digits'),
  country: z.string().min(1, 'Required'),
});

function FormHarness({
  onReady,
}: {
  onReady?: (api: { submit: () => void }) => void;
}) {
  const form = useForm(schema, {
    defaultValues: { otp: '', country: '' },
  });

  React.useEffect(() => {
    onReady?.({
      submit: () => {
        void form.handleSubmit(() => {})();
      },
    });
  }, [form, onReady]);

  return (
    <>
      <ControlledOTPInput
        name="otp"
        control={form.control}
        label="Code"
        length={6}
        testID="otp"
      />
      <ControlledDropdown
        name="country"
        control={form.control}
        label="Country"
        data={[{ label: 'US', value: 'us' }]}
        testID="country"
      />
      <Button label="Submit" onPress={form.handleSubmit(() => {})} testID="submit" />
    </>
  );
}

describe('controlled form wrappers', () => {
  it('surfaces OTP validation error text via Field', async () => {
    const { user } = setup(<FormHarness />);
    await user.press(screen.getByTestId('submit'));
    await waitFor(() => {
      expect(screen.getByTestId('otp-error')).toHaveTextContent('OTP must be 6 digits');
    });
  });

  it('marks dropdown touched and shows error after submit', async () => {
    const { user } = setup(<FormHarness />);
    await user.press(screen.getByTestId('submit'));
    await waitFor(() => {
      expect(screen.getByTestId('country-error')).toHaveTextContent('Required');
    });
  });
});
