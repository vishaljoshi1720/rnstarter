> RN Starter — production-ready React Native / Expo template.

## What: Technology Stack

- **Expo SDK 54** with React Native 0.81.5 - Managed React Native development
- **TypeScript** - Strict type safety throughout
- **Expo Router 6** - File-based routing (like Next.js)
- **Unistyles** - StyleSheet-based theming + responsive scaling
- **Zustand** - Lightweight global state management
- **React Query** - Server state and data fetching
- **React Hook Form + Zod** - Type-safe form handling and validation
- **MMKV** - Encrypted local storage
- **Jest + React Testing Library** - Unit testing

## What: Project Structure

```
src/
├── app/ # Expo Router file-based routes (add new routes here)
├── features/ # Feature modules - auth, settings are EXAMPLES
├── components/ # Shared UI (atoms, molecules, organisms)
├── lib/ # Pre-configured utilities (api, auth, i18n, storage, unistyles)
└── translations/ # i18n files (en.json, ar.json - add more languages)

Root Files:
├── env.ts # Environment config (CUSTOMIZE bundle IDs, API URLs)
├── app.config.ts # Expo configuration
└── README.md # Project-specific documentation
```

## How: Development Workflow

**Essential Commands:**
```bash
pnpm start # Start dev server
pnpm ios/android # Run on platform
pnpm lint # ESLint check
pnpm type-check # TypeScript validation
pnpm test # Run Jest tests
pnpm check-all # All quality checks
```

**Environment-Specific:**
```bash
pnpm start:preview # Preview environment
pnpm ios:production # Production iOS
pnpm build:production:ios # EAS production build
```

## How: Key Patterns

- **Create features**: New folder in `src/features/[your-feature]/` with screens, components, API hooks
- **Add routes**: Create files in `src/app/` (file-based routing)
- **Forms**: Use React Hook Form + Zod (see `src/features/auth/components/login-form.tsx`)
- **Data fetching**: Use React Query
- **Global state**: Use Zustand (see `src/features/auth/use-auth-store.tsx`)
- **Styling**: Unistyles StyleSheets (see `src/components/atoms/button`)
- **Storage**: Use MMKV via `src/lib/storage.tsx` for sensitive data
- **Imports**: Always use `@/` prefix, never relative imports

## How: Essential Rules

- ✅ **DO** use absolute imports: `@/components/ui/button`
- ✅ **DO** follow feature-based structure: `src/features/[name]/`
- ✅ **DO** use React Hook Form for forms
- ✅ **DO** use MMKV storage for sensitive data (not AsyncStorage)
- ✅ **DO** use EAS Build for production: `pnpm build:production:ios`
- ✅ **DO** prefix env vars with `EXPO_PUBLIC_*` for app access
- ❌ **DO NOT** modify `android/` or `ios/` directly (use Expo config plugins)
