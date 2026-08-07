import type { LoginFormProps } from '..';

import * as React from 'react';

import { Button } from '@/components';
import { cleanup, screen, setup, waitFor } from '@/lib/test-utils';
import { LoginForm } from '..';
import { useLoginForm } from '../use-login-form';

afterEach(cleanup);

const onSubmitMock: jest.Mock<LoginFormProps['onSubmit']> = jest.fn();

function LoginFormHarness({ onSubmit }: LoginFormProps) {
  const { control, submit, isSubmitting } = useLoginForm(onSubmit);
  return (
    <>
      <LoginForm control={control} />
      <Button
        testID="login-button"
        label="Login"
        onPress={submit}
        loading={isSubmitting}
      />
    </>
  );
}

describe('loginForm Form ', () => {
  it('renders correctly', async () => {
    setup(<LoginFormHarness />);
    expect(await screen.findByTestId('form-title')).toBeOnTheScreen();
  });

  it('should display required error when values are empty', async () => {
    const { user } = setup(<LoginFormHarness />);

    const button = screen.getByTestId('login-button');
    expect(screen.queryByText(/Email is required/i)).not.toBeOnTheScreen();
    await user.press(button);
    expect(await screen.findByText(/Email is required/i)).toBeOnTheScreen();
    expect(screen.getByText(/Password is required/i)).toBeOnTheScreen();
  });

  it('should display matching error when email is invalid', async () => {
    const { user } = setup(<LoginFormHarness />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-button');

    await user.type(emailInput, 'yyyyy');
    await user.type(passwordInput, 'test');
    await user.press(button);

    expect(await screen.findByText(/Invalid email format/i)).toBeOnTheScreen();
    expect(screen.queryByText(/Email is required/i)).not.toBeOnTheScreen();
  });

  it('should call LoginForm with correct values when values are valid', async () => {
    const { user } = setup(<LoginFormHarness onSubmit={onSubmitMock} />);

    const button = screen.getByTestId('login-button');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    await user.type(emailInput, 'youssef@gmail.com');
    await user.type(passwordInput, 'password');
    await user.press(button);
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
    expect(onSubmitMock).toHaveBeenCalledWith(
      expect.objectContaining({
        email: 'youssef@gmail.com',
        password: 'password',
      }),
      expect.anything(),
    );
  });
});
