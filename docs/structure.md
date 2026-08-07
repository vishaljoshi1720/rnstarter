# Structure

```
src/
├── app/            # Expo Router routes (thin re-exports)
├── features/       # Feature modules — public API via index.ts
├── components/     # Shared UI (atoms / molecules / organisms)
├── lib/            # api, form, i18n, storage, auth token helpers
├── shared/         # App-wide: auth session, routes, hooks, utils
├── theme/          # Design tokens + Unistyles + nav theme
└── translations/   # en.json, ar.json, …
```

**Rules of thumb**

- New screen → `src/features/[feature]/` (+ `index.ts` export) + route under `src/app/`
- Shared UI → `src/components/` (import `@/components` or deep atom path)
- Cross-cutting session / app hooks → `src/shared/` (e.g. `@/shared/auth`)
- App infra → `src/lib/` (api, form, i18n, storage)
- App config → `env.ts` + `app.config.ts`
- Imports → `@/...` (absolute); inside `components/` prefer relative imports to avoid barrel cycles
