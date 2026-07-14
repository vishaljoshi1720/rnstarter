import { render, screen } from '@testing-library/react-native';
import * as React from 'react';

import { AppText } from '../index';

describe('appText', () => {
  it('renders children', () => {
    render(<AppText testID="text">Hello</AppText>);
    expect(screen.getByTestId('text')).toBeOnTheScreen();
    expect(screen.getByText('Hello')).toBeOnTheScreen();
  });

  it('applies typography variant', () => {
    render(
      <AppText testID="text" variant="headlineLarge">
        Title
      </AppText>,
    );
    expect(screen.getByTestId('text')).toBeOnTheScreen();
  });

  it('applies color prop', () => {
    render(
      <AppText testID="text" color="secondary">
        Muted
      </AppText>,
    );
    expect(screen.getByTestId('text')).toBeOnTheScreen();
  });

  it('accepts custom style', () => {
    render(
      <AppText testID="text" style={{ textAlign: 'center' }}>
        Centered
      </AppText>,
    );
    expect(screen.getByTestId('text')).toBeOnTheScreen();
  });
});
