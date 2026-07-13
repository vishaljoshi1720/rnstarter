import type { Href } from 'expo-router';

/**
 * Central app route paths (Expo Router).
 * Use these instead of string literals in navigation / Redirect / Link.
 */
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ONBOARDING: '/onboarding',
  SETTINGS: '/settings',
} satisfies Record<string, Href>;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
