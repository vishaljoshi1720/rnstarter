import { Redirect } from 'expo-router';
import * as React from 'react';

import { PlaygroundScreen } from '@/features/playground';
import { ROUTES } from '@/shared/constants';

/**
 * Kit gallery — only available in development builds.
 */
export default function PlaygroundRoute() {
  if (!__DEV__) {
    return <Redirect href={ROUTES.HOME} />;
  }

  return <PlaygroundScreen />;
}
