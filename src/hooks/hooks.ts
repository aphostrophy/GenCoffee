import { useState } from 'react';
import useConstant from 'use-constant';
import { useAsync } from 'react-async-hook';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@stores/configureStore';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useToggle = (initialValue: boolean): readonly [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggleValue = () => setValue(val => !val);
  return [value, toggleValue] as const;
};

export function useDebouncedSearch(searchFunction: (query: string) => Promise<any>) {
  const [inputText, setInputText] = useState<string>('');

  const debouncedSearchFunction = useConstant(() => AwesomeDebouncePromise(searchFunction, 1000));

  const searchResults = useAsync(async () => {
    if (inputText.length < 5) {
      return null;
    } else {
      return debouncedSearchFunction(inputText);
    }
  }, [debouncedSearchFunction, inputText]);

  return {
    inputText,
    setInputText,
    searchResults,
  };
}
