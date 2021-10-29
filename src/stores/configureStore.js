import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {name as appName} from '../../app.json';

import rootReducer from 'reducers';

const persistConfig = {
  key: 'root',
  keyPrefix: appName,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  return createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
};

export default () => {
  let store = configureStore();
  let persistor = persistStore(store);
  return {store, persistor};
};
