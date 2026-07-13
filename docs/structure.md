# Structure

```
src/
├── app/            # Expo Router routes
├── features/       # Feature modules (screens, hooks, api)
├── components/     # Shared UI (atoms / molecules / organisms)
├── lib/            # api, auth, i18n, storage, unistyles
└── translations/   # en.json, ar.json, …
```

**Rules of thumb**

- New screen → `src/features/[feature]/` + route under `src/app/`
- Shared UI → `src/components/` (import `@/components` or `@/components/atoms/…`)
- Shared hooks/utils → `src/common/`
- App infra → `src/lib/` (api, auth, i18n, storage)
- App config → `env.ts` + `app.config.ts`
- Imports → `@/...` (absolute), not relative `../`
