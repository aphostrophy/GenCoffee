import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {reduxBatch} from '@manaflair/redux-batch';
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
import {name as appName} from '../../app.json';

import rootReducer from '@reducers';

const persistConfig = {
  key: 'root',
  keyPrefix: appName,
  storage: AsyncStorage,
};

const preloadedState = {};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  preloadedState: preloadedState,
  enhancers: [reduxBatch],
});
let persistor = persistStore(store);

export default () => {
  return {store, persistor};
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
