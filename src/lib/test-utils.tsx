/* eslint-disable react-refresh/only-export-components */
import type { RenderOptions } from '@testing-library/react-native';

import type { ReactElement } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from 'expo-router/react-navigation';
import { render, userEvent } from '@testing-library/react-native';
import * as React from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '@shopify/flash-list/jestSetup';

const initialMetrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};

function createAppWrapper() {
  return ({ children }: { children: React.ReactNode }) => (
    <SafeAreaProvider initialMetrics={initialMetrics}>
      <KeyboardProvider>
        <BottomSheetModalProvider>
          <NavigationContainer>{children}</NavigationContainer>
        </BottomSheetModalProvider>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}

function customRender(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  const Wrapper = createAppWrapper();
  return render(ui, { wrapper: Wrapper, ...options });
}

export function setup(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  const Wrapper = createAppWrapper();
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
}

export * from '@testing-library/react-native';
export { customRender as render };
