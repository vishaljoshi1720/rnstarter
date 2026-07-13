# Customize

## App identity — `env.ts`

| Field | Purpose |
| --- | --- |
| `NAME` | Display name |
| `BUNDLE_IDS` / `PACKAGES` | iOS / Android ids per env |
| `SCHEMES` | Deep link schemes |
| `EXPO_PUBLIC_API_URL` | API base URL (via env / process) |

Envs: `development` · `preview` · `production`.

## Expo / EAS — `app.config.ts`

- `owner` — Expo account
- `slug` — Expo project slug
- `extra.eas.projectId` — EAS project id

After changing bundle ids, run a fresh prebuild / native build.
