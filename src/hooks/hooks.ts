import { useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../stores/configureStore';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useToggle = (initialValue: boolean): readonly [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggleValue = () => setValue(val => !val);
  return [value, toggleValue] as const;
};
