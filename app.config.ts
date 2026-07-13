import type { ConfigContext, ExpoConfig } from '@expo/config';

import type { AppIconBadgeConfig } from 'app-icon-badge/types';

import 'tsx/cjs';

// adding lint exception as we need to import tsx/cjs before env.ts is imported
// eslint-disable-next-line perfectionist/sort-imports
import Env from './env';

const EXPO_ACCOUNT_OWNER = 'vishaljoshi017';
const EAS_PROJECT_ID = '41618b0c-0eeb-4547-9494-056d1f89447a';

const associatedHost = Env.ASSOCIATED_DOMAIN
  ? new URL(Env.ASSOCIATED_DOMAIN).host
  : undefined;

const appIconBadgeConfig: AppIconBadgeConfig = {
  enabled: Env.APP_ENV !== 'production',
  badges: [
    {
      text: Env.APP_ENV,
      type: 'banner',
      color: 'white',
    },
    {
      text: Env.VERSION,
      type: 'ribbon',
      color: 'white',
    },
  ],
};

const iosConfig: ExpoConfig['ios'] = {
  supportsTablet: true,
  bundleIdentifier: Env.BUNDLE_ID,
  infoPlist: {
    ITSAppUsesNonExemptEncryption: false,
  },
  ...(associatedHost
    ? { associatedDomains: [`applinks:${associatedHost}`] }
    : {}),
};

const androidConfig: ExpoConfig['android'] = {
  adaptiveIcon: {
    foregroundImage: './assets/adaptive-icon.png',
    backgroundColor: '#2E3C4B',
  },
  package: Env.PACKAGE,
  ...(associatedHost
    ? {
        intentFilters: [
          {
            action: 'VIEW',
            autoVerify: true,
            data: [
              {
                scheme: 'https',
                host: associatedHost,
                pathPrefix: '/',
              },
            ],
            category: ['BROWSABLE', 'DEFAULT'],
          },
        ],
      }
    : {}),
};

const interFontPlugin: [string, Record<string, unknown>] = [
  'expo-font',
  {
    ios: {
      fonts: [
        'node_modules/@expo-google-fonts/inter/400Regular/Inter_400Regular.ttf',
        'node_modules/@expo-google-fonts/inter/500Medium/Inter_500Medium.ttf',
        'node_modules/@expo-google-fonts/inter/600SemiBold/Inter_600SemiBold.ttf',
        'node_modules/@expo-google-fonts/inter/700Bold/Inter_700Bold.ttf',
      ],
    },
    android: {
      fonts: [
        {
          fontFamily: 'Inter',
          fontDefinitions: [
            {
              path: 'node_modules/@expo-google-fonts/inter/400Regular/Inter_400Regular.ttf',
              weight: 400,
            },
            {
              path: 'node_modules/@expo-google-fonts/inter/500Medium/Inter_500Medium.ttf',
              weight: 500,
            },
            {
              path: 'node_modules/@expo-google-fonts/inter/600SemiBold/Inter_600SemiBold.ttf',
              weight: 600,
            },
            {
              path: 'node_modules/@expo-google-fonts/inter/700Bold/Inter_700Bold.ttf',
              weight: 700,
            },
          ],
        },
      ],
    },
  },
];

const plugins: ExpoConfig['plugins'] = [
  [
    'expo-splash-screen',
    {
      backgroundColor: '#2E3C4B',
      image: './assets/splash-icon.png',
      imageWidth: 150,
    },
  ],
  interFontPlugin,
  'expo-localization',
  'expo-router',
  ['app-icon-badge', appIconBadgeConfig],
  ['react-native-edge-to-edge'],
];

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  owner: EXPO_ACCOUNT_OWNER,
  scheme: Env.SCHEME,
  slug: 'rnstarter',
  version: Env.VERSION,
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: iosConfig,
  experiments: {
    typedRoutes: true,
  },
  android: androidConfig,
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
  },
  plugins,
  extra: {
    eas: {
      projectId: EAS_PROJECT_ID,
    },
  },
});
