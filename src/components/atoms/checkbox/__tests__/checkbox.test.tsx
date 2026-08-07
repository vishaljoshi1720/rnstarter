import * as React from 'react';
import { cleanup, render, screen, setup } from '@/lib/test-utils';
import { Checkbox } from '../index';

afterEach(cleanup);

describe('checkbox', () => {
  it('renders and toggles', async () => {
    const onCheckedChange = jest.fn();
    const { user } = setup(
      <Checkbox
        checked={false}
        onCheckedChange={onCheckedChange}
        label="Accept"
        testID="cb"
      />,
    );
    expect(screen.getByRole('checkbox')).toBeOnTheScreen();
    await user.press(screen.getByTestId('cb'));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('does not toggle when disabled', async () => {
    const onCheckedChange = jest.fn();
    const { user } = setup(
      <Checkbox
        checked={false}
        onCheckedChange={onCheckedChange}
        disabled
        label="Accept"
        testID="cb"
      />,
    );
    await user.press(screen.getByTestId('cb'));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('exposes mixed state when indeterminate', () => {
    render(
      <Checkbox
        checked={false}
        indeterminate
        onCheckedChange={() => {}}
        label="Partial"
        testID="cb"
      />,
    );
    expect(screen.getByRole('checkbox').props.accessibilityState.checked).toBe('mixed');
  });
});
