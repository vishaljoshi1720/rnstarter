import type { AuthStatus } from './types';
import type { TokenType } from '@/lib/auth/utils';

import { create } from 'zustand';

import { getToken, removeToken, setToken } from '@/lib/auth/utils';
import { createSelectors } from '@/shared/utils';
import { AUTH_STATUS } from './types';

type AuthState = {
  token: TokenType | null;
  status: AuthStatus;
  signIn: (data: TokenType) => Promise<void>;
  signOut: () => Promise<void>;
  hydrate: () => Promise<void>;
};

const _useAuthStore = create<AuthState>(set => ({
  status: AUTH_STATUS.Idle,
  token: null,
  signIn: async (token) => {
    await setToken(token);
    set({ status: AUTH_STATUS.SignIn, token });
  },
  signOut: async () => {
    await removeToken();
    set({ status: AUTH_STATUS.SignOut, token: null });
  },
  hydrate: async () => {
    try {
      const userToken = await getToken();
      if (userToken !== null) {
        set({ status: AUTH_STATUS.SignIn, token: userToken });
      }
      else {
        set({ status: AUTH_STATUS.SignOut, token: null });
      }
    }
    catch (e) {
      console.error(e);
      set({ status: AUTH_STATUS.SignOut, token: null });
    }
  },
}));

export const useAuthStore = createSelectors(_useAuthStore);

export const signOut = () => _useAuthStore.getState().signOut();
export const signIn = (token: TokenType) => _useAuthStore.getState().signIn(token);
export const hydrateAuth = () => _useAuthStore.getState().hydrate();
export const getAuthToken = () => _useAuthStore.getState().token;
