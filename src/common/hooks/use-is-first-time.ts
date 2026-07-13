import { useMMKVBoolean } from 'react-native-mmkv';

import { STORAGE_KEYS } from '@/common/constants';
import { storage } from '@/lib/storage';

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
