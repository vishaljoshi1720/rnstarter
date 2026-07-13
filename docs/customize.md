# Customize

## App identity — `env.ts`

| Field | Purpose |
| --- | --- |
| `NAME` | Display name |
| `BUNDLE_IDS` / `PACKAGES` | iOS / Android ids per env |
| `SCHEMES` | Deep link schemes |
| `API_URL` | From `EXPO_PUBLIC_API_URL` (see [Environment](./environment.md)) |

Envs: `development` · `preview` · `production`.

## Environment / secrets

Full guide: **[Environment variables](./environment.md)**

Quick start:

```sh
cp .env.example .env.local
```

Set `EXPO_PUBLIC_API_URL` in EAS for preview + production before store builds.

## Expo / EAS — `app.config.ts`

- `owner` — Expo account
- `slug` — Expo project slug
- `extra.eas.projectId` — EAS project id

After changing bundle ids, run a fresh prebuild / native build.
