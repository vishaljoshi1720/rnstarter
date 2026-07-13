# Environment variables

How RN Starter expects you to configure **live** apps (dev → TestFlight/Play internal → store).

## Mental model

| Kind | Goes where | Examples |
| --- | --- | --- |
| Public app config | `EXPO_PUBLIC_*` → JS bundle | API base URL, app env name, associated domain |
| App identity | `env.ts` constants | Name, bundle IDs, schemes, version |
| Build tooling secrets | EAS **secret** / CI | `NPM_TOKEN`, `SENTRY_AUTH_TOKEN`, `google-services.json` |
| User session secrets | SecureStore / encrypted MMKV | Access tokens after login |

**Rule:** if it is in the client bundle, assume a user can read it. Private API keys belong on **your backend**, not in the app.

## Local setup

```sh
cp .env.example .env.local
# edit EXPO_PUBLIC_API_URL to your machine / staging API
```

`.env` / `.env.*` are gitignored. `.env.example` is committed as the contract.

Expo CLI loads these automatically. Restart with cache clear if values look stale:

```sh
pnpm start -- --clear
```

Development falls back to `http://127.0.0.1:3000` when `EXPO_PUBLIC_API_URL` is unset so clone-and-run still works.

## Code usage

Import the typed object — do not scatter `process.env` in features:

```ts
import Env, { isProduction } from '@env';

fetch(`${Env.API_URL}/health`);
```

| Field | Source |
| --- | --- |
| `APP_ENV` | `EXPO_PUBLIC_APP_ENV` |
| `NAME` / `SCHEME` / `BUNDLE_ID` / `PACKAGE` | `env.ts` maps |
| `VERSION` | `package.json` |
| `API_URL` | `EXPO_PUBLIC_API_URL` |
| `ASSOCIATED_DOMAIN` | `EXPO_PUBLIC_ASSOCIATED_DOMAIN` (optional) |

Metro only inlines **static** reads: `process.env.EXPO_PUBLIC_API_URL` (done inside `env.ts`). Dynamic access will not work.

## Preview & production (EAS)

`eas.json` already sets `environment` per profile (`development` / `preview` / `production`).

Create the public API URL on EAS (plaintext is fine — it is not a secret):

```sh
eas env:create --name EXPO_PUBLIC_API_URL \
  --value https://api.yourapp.com \
  --environment production \
  --visibility plaintext

eas env:create --name EXPO_PUBLIC_API_URL \
  --value https://api.staging.yourapp.com \
  --environment preview \
  --visibility plaintext
```

Optional Universal / App Links host:

```sh
eas env:create --name EXPO_PUBLIC_ASSOCIATED_DOMAIN \
  --value https://app.yourapp.com \
  --environment production \
  --visibility plaintext
```

Only set this after you host `apple-app-site-association` (iOS) and `assetlinks.json` (Android). The template enables `autoVerify` when the var is present.

Pull cloud values onto a machine:

```sh
pnpm env:pull -- --environment preview
```

Publish updates with the same environment as the binary:

```sh
eas update --environment production
```

**Validation:** `preview` and `production` (and any command with `STRICT_ENV_VALIDATION=1`) **throw** if `EXPO_PUBLIC_API_URL` is missing or invalid. That stops a store build from shipping with an empty API host.

## What not to do

- Do not commit `.env.local` or real API keys
- Do not put private keys in `EXPO_PUBLIC_*`
- Do not switch flavors with `NODE_ENV` — use `EXPO_PUBLIC_APP_ENV` + EAS environments
- Do not expect EAS “secret” visibility to hide a value you also read in JS — secrets are for the **build job**, not the binary

## Customize identity

Edit maps at the top of `env.ts` (`NAME`, `BUNDLE_IDS`, `PACKAGES`, `SCHEMES`), then fresh prebuild / EAS build.
