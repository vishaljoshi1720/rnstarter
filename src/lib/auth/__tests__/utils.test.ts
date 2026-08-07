/**
 * @jest-environment node
 */
import * as SecureStore from 'expo-secure-store';

import { getToken, removeToken, setToken } from '../utils';

jest.mock('expo-secure-store', () => ({
  getItemAsync: jest.fn(),
  setItemAsync: jest.fn(),
  deleteItemAsync: jest.fn(),
}));

const mockedSecureStore = SecureStore as jest.Mocked<typeof SecureStore>;

describe('auth token utils (SecureStore)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('writes JSON token to SecureStore', async () => {
    await setToken({ access: 'a', refresh: 'r' });
    expect(mockedSecureStore.setItemAsync).toHaveBeenCalledWith(
      'auth_token',
      JSON.stringify({ access: 'a', refresh: 'r' }),
    );
  });

  it('reads and parses token', async () => {
    mockedSecureStore.getItemAsync.mockResolvedValueOnce(
      JSON.stringify({ access: 'a', refresh: 'r' }),
    );
    await expect(getToken()).resolves.toEqual({ access: 'a', refresh: 'r' });
  });

  it('clears corrupt token', async () => {
    mockedSecureStore.getItemAsync.mockResolvedValueOnce('not-json');
    await expect(getToken()).resolves.toBeNull();
    expect(mockedSecureStore.deleteItemAsync).toHaveBeenCalled();
  });

  it('removes token', async () => {
    await removeToken();
    expect(mockedSecureStore.deleteItemAsync).toHaveBeenCalledWith('auth_token');
  });
});
