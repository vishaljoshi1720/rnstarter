# Your App Name

> Built with [RN Starter](https://github.com/vishaljoshi1720/rnstarter)

## Get started

1. Install dependencies

```bash
pnpm install
```

2. Start the app

```bash
pnpm ios
# or
pnpm android
```

## Useful commands

```bash
pnpm start
pnpm lint
pnpm type-check
pnpm test
pnpm check-all
```

## Customize

- App name / bundle IDs / schemes → `env.ts`
- Expo owner / EAS project → `app.config.ts`
- Routes → `src/app/`
- Features → `src/features/`

## Environment (live apps)

```bash
cp .env.example .env.local   # gitignored — set your API URL
```

| Where | What |
| --- | --- |
| `.env.local` | Local `EXPO_PUBLIC_API_URL` |
| EAS env (`development` / `preview` / `production`) | Same keys for cloud builds |
| `env.ts` | App name, bundle IDs, schemes |

`EXPO_PUBLIC_*` is public in the JS bundle — never put private keys there. Preview/production builds **fail** if `EXPO_PUBLIC_API_URL` is missing.

```bash
eas env:create --name EXPO_PUBLIC_API_URL --value https://api.yourapp.com \
  --environment production --visibility plaintext
pnpm env:pull -- --environment preview   # optional: sync EAS → .env.local
```
