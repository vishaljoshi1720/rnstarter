import * as SecureStore from 'expo-secure-store';

import { STORAGE_KEYS } from '@/shared/constants/storage-keys';

export type TokenType = {
  access: string;
  refresh: string;
};

const TOKEN_KEY = STORAGE_KEYS.AUTH_TOKEN;

export async function getToken(): Promise<TokenType | null> {
  const raw = await SecureStore.getItemAsync(TOKEN_KEY);
  if (!raw)
    return null;
  try {
    return JSON.parse(raw) as TokenType;
  }
  catch {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    return null;
  }
}

export async function setToken(value: TokenType): Promise<void> {
  await SecureStore.setItemAsync(TOKEN_KEY, JSON.stringify(value));
}

export async function removeToken(): Promise<void> {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
}

/** Sync read for interceptors when token already hydrated in memory. Prefer auth store. */
export function getAccessTokenFromMemory(token: TokenType | null): string | null {
  return token?.access ?? null;
}
