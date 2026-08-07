export { LoginForm } from './components/login-form';
export type { FormType, LoginFormProps } from './components/login-form';
/**
 * Auth feature — login UI only.
 * Session state lives in `@/shared/auth` (cross-cutting).
 */
export { LoginScreen } from './login-screen';

// Re-export session for convenience — prefer `@/shared/auth` in new code.
export {
  AUTH_STATUS,
  hydrateAuth,
  signIn,
  signOut,
  useAuthStore,
} from '@/shared/auth';
export type { AuthStatus } from '@/shared/auth';
