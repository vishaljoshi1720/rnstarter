# Getting started

## New app from CLI

```sh
npx create-rnstarter-app@latest MyApp
cd MyApp
pnpm ios    # or pnpm android
```

Flags: `--with-tests` / `--no-tests`.

## From this repo

```sh
pnpm install
cp .env.example .env.local   # set EXPO_PUBLIC_API_URL if needed
pnpm start
pnpm ios    # or pnpm android
```

Need Expo / Xcode / Android Studio set up first: [React Native environment](https://reactnative.dev/docs/set-up-your-environment).

Env / EAS: [Environment variables](./environment.md).