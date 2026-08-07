export type AuthStatus = 'idle' | 'signOut' | 'signIn';

export const AUTH_STATUS = {
  Idle: 'idle',
  SignOut: 'signOut',
  SignIn: 'signIn',
} as const satisfies Record<string, AuthStatus>;
