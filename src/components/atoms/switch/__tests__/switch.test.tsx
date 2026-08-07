import type { SwitchProps } from '../types';

import * as React from 'react';
import { cleanup, render, screen, setup } from '@/lib/test-utils';
import { Switch } from '../index';

afterEach(cleanup);

describe('switch', () => {
  const baseProps: SwitchProps = {
    value: false,
    onValueChange: jest.fn(),
    testID: 'switch',
  };

  it('renders with accessibility role switch', () => {
    render(<Switch {...baseProps} label="Alerts" />);
    expect(screen.getByTestId('switch')).toBeOnTheScreen();
    expect(screen.getByRole('switch')).toBeOnTheScreen();
  });

  it('toggles value on press', async () => {
    const onValueChange = jest.fn();
    const { user } = setup(
      <Switch {...baseProps} onValueChange={onValueChange} label="Alerts" />,
    );
    await user.press(screen.getByTestId('switch'));
    expect(onValueChange).toHaveBeenCalledWith(true);
  });

  it('does not toggle when disabled', async () => {
    const onValueChange = jest.fn();
    const { user } = setup(
      <Switch {...baseProps} disabled onValueChange={onValueChange} label="Alerts" />,
    );
    await user.press(screen.getByTestId('switch'));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('exposes checked state for accessibility', () => {
    render(<Switch {...baseProps} value label="Alerts" />);
    expect(screen.getByRole('switch')).toBeChecked();
  });
});
