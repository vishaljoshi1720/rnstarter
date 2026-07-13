import type { TokenType } from '@/lib/auth/utils';

import { create } from 'zustand';

import { createSelectors } from '@/common/utils';
import { AuthStatus } from '@/features/auth/types';
import { getToken, removeToken, setToken } from '@/lib/auth/utils';

type AuthState = {
  token: TokenType | null;
  status: AuthStatus;
  signIn: (data: TokenType) => void;
  signOut: () => void;
  hydrate: () => void;
};

const _useAuthStore = create<AuthState>((set, get) => ({
  status: AuthStatus.Idle,
  token: null,
  signIn: (token) => {
    setToken(token);
    set({ status: AuthStatus.SignIn, token });
  },
  signOut: () => {
    removeToken();
    set({ status: AuthStatus.SignOut, token: null });
  },
  hydrate: () => {
    try {
      const userToken = getToken();
      if (userToken !== null) {
        get().signIn(userToken);
      }
      else {
        get().signOut();
      }
    }
    catch (e) {
      console.error(e);
    }
  },
}));

export const useAuthStore = createSelectors(_useAuthStore);

export const signOut = () => _useAuthStore.getState().signOut();
export const signIn = (token: TokenType) => _useAuthStore.getState().signIn(token);
export const hydrateAuth = () => _useAuthStore.getState().hydrate();
