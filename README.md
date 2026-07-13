# RN Starter

Production-ready React Native / Expo template. Unistyles, atomic UI, Expo Router, TypeScript, React Query, MMKV, Jest, EAS.

## Quick start

```sh
npx create-rnstarter-app@latest MyApp
# optional: --with-tests | --no-tests
```

Or clone the template:

```sh
git clone https://github.com/vishaljoshi1720/rnstarter.git
cd rnstarter
pnpm install
pnpm ios   # or pnpm android
```

## Stack

- Expo SDK 54 + React Native
- Expo Router (file-based)
- TypeScript
- Unistyles (responsive scaling via `s` / `vs` / `ms`)
- Zustand + React Query
- React Hook Form + Zod
- MMKV
- Jest + Maestro
- EAS Build

## Commands

```bash
pnpm start          # Dev server
pnpm ios / android  # Run on simulator
pnpm ios:device / android:device
pnpm lint
pnpm type-check
pnpm test
pnpm check-all
```

## Project structure

```
src/
├── app/           # Expo Router routes
├── features/      # Feature modules
├── components/    # Shared UI (atoms / molecules / organisms)
├── lib/           # api, auth, i18n, storage, theme
└── translations/  # i18n (en, ar, …)
```

Customize `env.ts` (name, bundle IDs, API URL) and `app.config.ts` (Expo owner, EAS project id).

More detail: [docs/](./docs).

## License

Copyright (c) 2026 Vishal Joshi. All rights reserved. See [LICENSE](./LICENSE).
