import * as React from 'react';

import { AppText, Button, Screen } from '@/components';
import { cleanup, render, screen, setup } from '@/lib/test-utils';

afterEach(cleanup);

describe('screen', () => {
  it('renders static layout by default', () => {
    render(
      <Screen testID="screen">
        <AppText testID="content">Hello</AppText>
      </Screen>,
    );

    expect(screen.getByTestId('screen')).toBeOnTheScreen();
    expect(screen.getByTestId('content')).toBeOnTheScreen();
  });

  it('renders scroll layout with children', () => {
    render(
      <Screen layout="scroll" testID="scroll-screen" inset="lg">
        <AppText testID="scroll-content">Scroll</AppText>
      </Screen>,
    );

    expect(screen.getByTestId('scroll-screen')).toBeOnTheScreen();
    expect(screen.getByTestId('scroll-content')).toBeOnTheScreen();
  });

  it('renders form layout with sticky footer by default', () => {
    render(
      <Screen
        layout="form"
        testID="sticky-form-screen"
        background="secondary"
        footer={{
          content: <Button testID="sticky-footer-button" label="Submit" />,
        }}
      >
        <AppText testID="sticky-form-content">Form</AppText>
      </Screen>,
    );

    expect(screen.getByTestId('sticky-form-screen')).toBeOnTheScreen();
    expect(screen.getByTestId('sticky-form-content')).toBeOnTheScreen();
    expect(screen.getByTestId('sticky-footer-button')).toBeOnTheScreen();
  });

  it('renders form layout with explicit inline footer', async () => {
    const onPress = jest.fn();
    const { user } = setup(
      <Screen
        layout="form"
        testID="form-screen"
        inset={{ horizontal: 'xl', vertical: '2xl' }}
        footer={{
          behavior: 'inline',
          content: (
            <Button testID="footer-button" label="Submit" onPress={onPress} />
          ),
        }}
      >
        <AppText testID="form-content">Form</AppText>
      </Screen>,
    );

    expect(screen.getByTestId('form-screen')).toBeOnTheScreen();
    expect(screen.getByTestId('form-content')).toBeOnTheScreen();
    expect(screen.getByTestId('footer-button')).toBeOnTheScreen();

    await user.press(screen.getByTestId('footer-button'));
    expect(onPress).toHaveBeenCalled();
  });

  it('supports full-bleed and statusBar opt-out', () => {
    render(
      <Screen
        safeArea={false}
        statusBar={false}
        testID="unsafe-screen"
        background="secondary"
      >
        <AppText>Bleed</AppText>
      </Screen>,
    );

    expect(screen.getByTestId('unsafe-screen')).toBeOnTheScreen();
  });

  it('supports controlled refresh without throwing', async () => {
    const onRefresh = jest.fn(async () => {});
    render(
      <Screen
        layout="scroll"
        testID="refresh-screen"
        refresh={{ onRefresh, refreshing: false }}
      >
        <AppText>List</AppText>
      </Screen>,
    );

    expect(screen.getByTestId('refresh-screen')).toBeOnTheScreen();
    expect(onRefresh).not.toHaveBeenCalled();
  });
});
