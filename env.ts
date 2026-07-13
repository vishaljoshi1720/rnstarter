import z from 'zod';

import packageJSON from './package.json';

/**
 * Client-safe app config.
 *
 * Everything exported here ends up in the JS bundle — treat it as public.
 * Never put private API keys, tokens, or passwords in EXPO_PUBLIC_* or here.
 *
 * Where values come from:
 * - Product identity (NAME, bundle IDs, schemes) → constants in this file
 * - EXPO_PUBLIC_* → `.env.local` / `.env` locally, EAS Environment Variables on builds
 * - Missing API URL in development → DEFAULT_DEV_API_URL below
 *
 * Customize NAME / BUNDLE_IDS / PACKAGES / SCHEMES for your product.
 * Set EXPO_PUBLIC_API_URL per environment before shipping.
 *
 * @see docs/environment.md
 */

const APP_ENVS = ['development', 'preview', 'production'] as const;

const clientEnvSchema = z.object({
  APP_ENV: z.enum(APP_ENVS),
  NAME: z.string().min(1),
  SCHEME: z.string().min(1),
  BUNDLE_ID: z.string().min(1),
  PACKAGE: z.string().min(1),
  VERSION: z.string().min(1),
  /** Backend base URL — public, not a secret */
  API_URL: z.string().url(),
  /** Optional https origin for Universal Links / App Links */
  ASSOCIATED_DOMAIN: z.string().url().optional(),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;

type AppEnv = ClientEnv['APP_ENV'];

// ─── Product identity (edit these) ───────────────────────────────────────────

const NAME = 'RN Starter';

const BUNDLE_IDS = {
  development: 'com.rnstarter.development',
  preview: 'com.rnstarter.preview',
  production: 'com.rnstarter',
} as const satisfies Record<AppEnv, string>;

const PACKAGES = {
  development: 'com.rnstarter.development',
  preview: 'com.rnstarter.preview',
  production: 'com.rnstarter',
} as const satisfies Record<AppEnv, string>;

const SCHEMES = {
  development: 'rnstarter',
  preview: 'rnstarter.preview',
  production: 'rnstarter',
} as const satisfies Record<AppEnv, string>;

/** Used only when APP_ENV=development and EXPO_PUBLIC_API_URL is unset */
const DEFAULT_DEV_API_URL = 'http://127.0.0.1:3000';

// ─── Resolve ─────────────────────────────────────────────────────────────────

function resolveAppEnv(): AppEnv {
  const value = process.env.EXPO_PUBLIC_APP_ENV ?? 'development';
  if (!(APP_ENVS as readonly string[]).includes(value)) {
    throw new Error(
      `Invalid EXPO_PUBLIC_APP_ENV="${value}". Expected: ${APP_ENVS.join(', ')}`,
    );
  }
  return value as AppEnv;
}

function resolveApiUrl(appEnv: AppEnv): string {
  const fromEnv = process.env.EXPO_PUBLIC_API_URL;
  if (fromEnv && fromEnv.length > 0) {
    return fromEnv;
  }
  if (appEnv === 'development') {
    return DEFAULT_DEV_API_URL;
  }
  // preview / production must set this via EAS or .env
  return '';
}

function resolveAssociatedDomain(): string | undefined {
  const value = process.env.EXPO_PUBLIC_ASSOCIATED_DOMAIN;
  return value && value.length > 0 ? value : undefined;
}

const APP_ENV = resolveAppEnv();

const shouldEnforce
  = process.env.STRICT_ENV_VALIDATION === '1'
    || APP_ENV === 'preview'
    || APP_ENV === 'production';

const rawEnv: ClientEnv = {
  APP_ENV,
  NAME,
  SCHEME: SCHEMES[APP_ENV],
  BUNDLE_ID: BUNDLE_IDS[APP_ENV],
  PACKAGE: PACKAGES[APP_ENV],
  VERSION: packageJSON.version,
  API_URL: resolveApiUrl(APP_ENV),
  ASSOCIATED_DOMAIN: resolveAssociatedDomain(),
};

function getValidatedEnv(env: ClientEnv): ClientEnv {
  const parsed = clientEnvSchema.safeParse(env);

  if (!parsed.success) {
    const message
      = `Invalid environment variables:\n${
        JSON.stringify(parsed.error.flatten().fieldErrors, null, 2)
      }\n\nFix:\n`
      + `  • Local: copy .env.example → .env.local and set EXPO_PUBLIC_API_URL\n`
      + `  • EAS:   eas env:create --name EXPO_PUBLIC_API_URL --environment ${APP_ENV} …\n`
      + `See README (Environment) or docs/environment.md`;

    if (shouldEnforce) {
      console.error(message);
      throw new Error('Invalid environment variables');
    }

    console.warn(message);
    return env;
  }

  return parsed.data;
}

const Env = getValidatedEnv(rawEnv);

export default Env;

export const isDevelopment = Env.APP_ENV === 'development';
export const isPreview = Env.APP_ENV === 'preview';
export const isProduction = Env.APP_ENV === 'production';
