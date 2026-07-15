# Architecture

Production React Native architecture guide for the RN Starter template.

## Overview

This template follows industry-standard patterns optimized for maintainability, scalability, and developer experience in production React Native applications.

---

## Folder Structure Rationale

```
src/
├── app/                # Expo Router - file-based routing
├── features/           # Feature modules (business logic + UI)
├── components/         # Shared UI primitives (atomic design)
├── lib/                # Infrastructure integrations
├── theme/              # Design tokens + theming
├── translations/       # i18n files
└── common/             # Shared utilities + constants
```

### Why Feature-Based?

Feature-based architecture (vertical slicing) over layer-based (horizontal slicing):

**Benefits:**
- **Co-location**: Related code lives together
- **Encapsulation**: Clear boundaries, reduced coupling
- **Scalability**: Easy to add/remove features
- **Team collaboration**: Features can be owned independently

**Example:**
```
features/
├── auth/
│   ├── components/      # Auth-specific UI
│   ├── use-auth-store.tsx
│   ├── api.ts
│   └── types.ts
└── settings/
    ├── components/
    ├── settings-screen/
    └── types.ts
```

**Rule:** Features NEVER import from each other. Shared code goes to `components/` or `lib/`.

---

## Why lib/ folder?

`lib/` separates **infrastructure integration** from **business logic**.

### What belongs in lib/?

Third-party library integrations, framework wrappers, utilities:

- **lib/form/** - React Hook Form + Zod integration, controlled components
- **lib/api/** - Axios setup, interceptors, error handling
- **lib/storage/** - MMKV wrapper with encryption
- **lib/i18n/** - i18next configuration
- **lib/unistyles/** - Theme system integration

### What doesn't belong in lib/?

- Business logic → `features/`
- UI components → `components/`
- App-specific utilities → `common/`

### Industry Standard

The `lib/` pattern is used by major React Native projects:

- [Infinite Red's Ignite](https://github.com/infinitered/ignite)
- [Expo Router Examples](https://github.com/expo/examples)
- [React Native community templates](https://github.com/react-native-community)

---

## lib/ vs components/ vs features/

| Folder | Purpose | Examples |
|--------|---------|----------|
| **lib/** | Infrastructure integrations | `lib/form/`, `lib/api/`, `lib/storage/` |
| **components/** | Reusable UI primitives | `Button`, `Input`, `Card`, `Select` |
| **features/** | Business logic + screens | `auth/`, `settings/`, `profile/` |

**Dependency flow:**
```
features/ → lib/
features/ → components/
components/ → theme/

✅ lib/ can import from nothing (pure integrations)
❌ lib/ never imports from features/
❌ features/ never import from each other
```

---

## Components Architecture (Atomic Design)

Organized by complexity, not file type:

### atoms/
Single-responsibility primitives with no dependencies on other components:
- `Button`, `Input`, `Text`, `Icon`, `Avatar`, `Badge`

### molecules/
Combinations of atoms forming reusable patterns:
- `Card`, `List`, `Select`, `DatePickerModal`, `MaterialTabs`

### organisms/
Complex, feature-rich components:
- `Header`, `FeedbackState` (EmptyState, ErrorState)

**Rule:** Lower levels (atoms) never import from higher levels (molecules, organisms).

---

## Form Architecture (lib/form/)

Centralized React Hook Form + Zod integration following 2026 best practices.

### Core Hook: useForm

```typescript
const form = useForm(schema, {
  defaultValues: { email: '', password: '' },
});
```

**Configured with optimal defaults:**
- `mode: 'onTouched'` - Validate after first blur, then onChange
- `reValidateMode: 'onChange'` - Fast feedback after error
- `delayError: 500ms` - Prevents flicker during fast typing
- `shouldUnregister: false` - Preserves multi-step/conditional form data

### Controlled Components

Generic base types eliminate duplication:

```typescript
// Before (50+ lines of repetition)
type ControlledInputProps<T> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions<T>;
} & Omit<InputProps, 'value' | 'onChangeText' | 'error'>;

// After (1 line per component)
type ControlledInputProps<T> =
  MakeControlled<T, InputProps, 'value' | 'onChangeText'>;
```

**Available controlled components:**
- `ControlledInput`, `ControlledSelect`, `ControlledSwitch`
- `ControlledRadioGroup`, `ControlledOTPInput`, `ControlledPhoneInput`
- `ControlledMultiSelect`, `ControlledDatePicker`, `ControlledTimePicker`

See [docs/forms.md](./forms.md) for complete usage guide.

---

## Default Values Best Practice

**Rule:** NEVER use `defaultValue` prop on controlled components.

### Sync Default Values

Pass to `useForm`:

```typescript
const form = useForm(schema, {
  defaultValues: { name: 'John', email: 'john@example.com' },
});
```

### Async Default Values (Loading from API)

Use `useFormWithDefaults` hook:

```typescript
const form = useFormWithDefaults(schema, {
  load: () => api.getProfile(),
  transform: (data) => ({
    name: data.fullName,
    email: data.email,
  }),
});

if (form.isLoadingDefaults) {
  return <LoadingSpinner />;
}
```

### Why not defaultValue prop?

React Hook Form manages all form state. Using `defaultValue` on controlled components breaks synchronization and causes bugs.

---

## State Management

### Local State: React useState/useReducer
For component-specific state.

### Global State: Zustand
For app-wide state (auth, theme, settings).

**Example:**
```typescript
src/features/auth/use-auth-store.tsx
```

### Server State: React Query
For API data fetching, caching, synchronization.

```typescript
const { data, isLoading } = useQuery({
  queryKey: ['profile'],
  queryFn: () => api.getProfile(),
});
```

---

## Styling System

### Unistyles

StyleSheet-based theming with responsive scaling.

**Theme tokens:**
```typescript
theme.colors.brand.primary
theme.spacing.md
theme.typography.bodyMedium
theme.radius.lg
```

**Automatic scaling:**
- Spacing, sizing, fonts scale with device density
- Use `theme.*Raw` tokens when scaling must NOT apply (borders, switch geometry)

See [.cursor/rules/responsive-scaling.mdc](./.cursor/rules/responsive-scaling.mdc)

---

## Routing (Expo Router)

File-based routing like Next.js:

```
app/
├── (app)/
│   ├── _layout.tsx     # Tab navigator
│   ├── index.tsx       # Home screen
│   └── settings.tsx    # Settings screen
├── (auth)/
│   └── login.tsx       # Login screen
└── _layout.tsx         # Root layout
```

---

## TypeScript Standards

### Strict Mode

`tsconfig.json` enables strict type checking.

### Import Aliases

Always use `@/` prefix:

```typescript
import { Button } from '@/components';
import { useAuthStore } from '@/features/auth';
import { translate } from '@/lib/i18n';
```

❌ Never use relative imports: `../../components/button`

### Type Exports

Export types alongside components:

```typescript
export type { ButtonProps, ButtonVariant } from './types';
export { Button } from './button';
```

---

## Architectural Principles

### 1. Single Responsibility
Each module has one clear purpose.

### 2. Dependency Inversion
High-level modules (features) depend on low-level modules (lib), never reverse.

### 3. Co-location
Keep related code together. Feature folder owns all its logic + UI.

### 4. Public APIs
Use `index.ts` to export only what other modules need. Internal files stay private.

### 5. Separation of Concerns
- `lib/` = infrastructure
- `components/` = reusable UI
- `features/` = business logic + app-specific UI

---

## Testing Strategy

### Unit Tests
Component logic, utilities, hooks.

```typescript
src/components/atoms/button/__tests__/button.test.tsx
```

### Integration Tests
Feature flows, form submissions, navigation.

```typescript
src/features/auth/__tests__/login-flow.test.tsx
```

**Tools:**
- Jest
- React Testing Library
- React Native Testing Library

---

## Environment Configuration

### Three Environments

- **local** - Development on device/simulator
- **preview** - Staging for testing
- **production** - Live app

### Env Vars

- Use `.env.local` for local overrides (gitignored)
- Use EAS secrets for preview/production
- Import typed config via `@env`

See [docs/environment.md](./docs/environment.md)

---

## Performance Best Practices

1. **FlashList** over FlatList for long lists
2. **React.memo** for expensive components
3. **useCallback/useMemo** for referential stability
4. **Lazy loading** with React Suspense
5. **Image optimization** with Expo Image
6. **Code splitting** with dynamic imports

---

## Security Guidelines

1. **Never commit secrets** (.env.local is gitignored)
2. **Use MMKV encryption** for sensitive data
3. **HTTPS only** for API calls
4. **Secure token storage** (see `lib/storage.tsx`)
5. **Input validation** with Zod schemas

---

## Code Quality Tools

### ESLint
Enforces code style and catches bugs.

```bash
pnpm lint
```

### TypeScript
Type safety and IntelliSense.

```bash
pnpm type-check
```

### Prettier (via ESLint)
Consistent formatting.

---

## Migration Notes

### Renamed Components

- `Tabs` → `SegmentedControl` (for 2-4 toggle buttons)
- `DatePickerModal` → `DatePickerInput` (now uses react-native-modal-datetime-picker)
- `TimePickerModal` → `TimePickerInput` (now uses react-native-modal-datetime-picker)

**New Components:**
- `MaterialTopTabs` - Official React Navigation material top tabs for navigation (via `@/components/navigation`)

Update imports:

```typescript
// Segmented Control (unchanged)
import { SegmentedControl } from '@/components';

// Date/Time Pickers (new names)
import { DatePickerInput, TimePickerInput } from '@/components';
// Or controlled versions
import { ControlledDatePicker, ControlledTimePicker } from '@/lib/form';

// Material Top Tabs (for app layouts)
import { MaterialTopTabs } from '@/components/navigation';
```


---

## Further Reading

- [Forms Guide](./forms.md) - Complete React Hook Form + Zod usage
- [Component Creation Rules](./.cursor/rules/component-creation.mdc)
- [Responsive Scaling](./.cursor/rules/responsive-scaling.mdc)
- [Environment Docs](./docs/environment.md)

---

## Philosophy

This architecture optimizes for:

1. **Developer Experience** - Clear conventions, minimal boilerplate
2. **Maintainability** - Easy to understand and modify
3. **Scalability** - Grows with your app without refactoring
4. **Type Safety** - Catch bugs at compile time
5. **Performance** - Fast builds, runtime efficiency
6. **Industry Standards** - Prefer battle-tested libraries over custom implementations

Every decision has a rationale. Question it, improve it, document changes.

---

## Library Choices

### Prefer Industry Standards Over Custom Code

When selecting libraries for this template, we prioritize:

1. **Community Adoption** - High npm downloads, GitHub stars
2. **Maintenance** - Regular updates, responsive maintainers
3. **Production Ready** - Used in thousands of real apps
4. **DX** - Clean API, good documentation, TypeScript support
5. **Long-term Stability** - Won't be abandoned in 6 months

**Custom implementations are only justified when:**
- No established solution exists
- Custom solution genuinely improves DX
- Standard library has significant drawbacks

### Date & Time Pickers

**Library:** [`react-native-modal-datetime-picker`](https://github.com/mmazzarolo/react-native-modal-datetime-picker)

**Why:**
- 2.9k GitHub stars, 200k+ weekly downloads
- Wraps `@react-native-community/datetimepicker` (official)
- Consistent cross-platform modal experience
- Actively maintained (last update: Aug 2024)
- Used in production by thousands of apps

**Alternative Considered:** Custom modal implementation
**Why Not:** Reinventing the wheel. The library handles all edge cases (iOS/Android differences, modal states, accessibility) that we'd have to implement ourselves.

### Material Top Tabs

**Library:** React Navigation Material Top Tabs via `@react-navigation/material-top-tabs`

**Why:**
- Official React Navigation component
- Full feature set: swipe gestures, animated indicators, lazy loading
- Integrates with Expo Router via `withLayoutContext`
- Complete Material Design 3 implementation
- Production-tested in majority of React Native apps

**Alternative Considered:** Custom scrollable tab component
**Why Not:** React Navigation already solved all the hard problems (gesture handling, animations, lazy loading, accessibility). Custom implementation would be hundreds of lines of complex gesture/animation code with high maintenance cost.

### Decision-Making Process

Before adding any library or custom code:

1. **Research:** Check npm trends, GitHub activity, last commit date
2. **Evaluate:** Does a well-maintained library exist?
3. **Compare:** If multiple options, document why we chose X over Y
4. **Document:** Explain the choice in ARCHITECTURE.md

**Red flags for libraries:**
- Last commit > 1 year ago
- < 100k weekly downloads (for common needs)
- Lots of open issues, no responses from maintainers
- No TypeScript support

**When to build custom:**
- Feature is highly specific to this template
- Library adds 10+ MB to bundle for simple feature
- Library has major security issues or bugs
- No maintained solution exists

This approach ensures the template remains maintainable, uses patterns developers already know, and doesn't reinvent solved problems.

