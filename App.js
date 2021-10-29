/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* Default import for RN Navigation v6 */
import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import configureStore from './src/stores/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigator from 'navigations';

const App = () => {
  const {persistor, store} = configureStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
