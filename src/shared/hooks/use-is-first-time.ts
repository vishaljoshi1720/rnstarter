import { useMMKVBoolean } from 'react-native-mmkv';

import { storage } from '@/lib/storage';
import { STORAGE_KEYS } from '@/shared/constants';

type SetIsFirstTime = (value: boolean | undefined) => void;

export function useIsFirstTime(): [boolean, SetIsFirstTime] {
  const [isFirstTime, setIsFirstTime] = useMMKVBoolean(
    STORAGE_KEYS.IS_FIRST_TIME,
    storage,
  );
  if (isFirstTime === undefined) {
    return [true, setIsFirstTime];
  }
  return [isFirstTime, setIsFirstTime];
}
