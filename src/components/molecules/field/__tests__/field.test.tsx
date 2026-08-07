import * as React from 'react';
import { View } from 'react-native';
import { cleanup, render, screen } from '@/lib/test-utils';
import { Field } from '../index';

afterEach(cleanup);

describe('field', () => {
  it('renders label and children', () => {
    render(
      <Field label="Email" testID="field">
        <View testID="control" />
      </Field>,
    );
    expect(screen.getByTestId('field-label')).toHaveTextContent('Email');
    expect(screen.getByTestId('control')).toBeOnTheScreen();
  });

  it('shows error instead of helper text', () => {
    render(
      <Field label="Email" error="Required" helperText="Hint" testID="field">
        <View />
      </Field>,
    );
    expect(screen.getByTestId('field-error')).toHaveTextContent('Required');
    expect(screen.queryByTestId('field-helper')).toBeNull();
  });

  it('shows helper when no error', () => {
    render(
      <Field label="Email" helperText="Hint" testID="field">
        <View />
      </Field>,
    );
    expect(screen.getByTestId('field-helper')).toHaveTextContent('Hint');
  });
});
