import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { reduxBatch } from '@manaflair/redux-batch';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { name as appName } from '../../app.json';

import rootReducer from '@slices';

const persistConfig = {
  key: 'root',
  keyPrefix: appName,
  storage: AsyncStorage,
  whitelist: ['useAuth'],
};
const middlewares = [logger];

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const preloadedState = {};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
  preloadedState: preloadedState,
  enhancers: [reduxBatch],
});
const persistor = persistStore(store);

export default () => {
  return { store, persistor };
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
