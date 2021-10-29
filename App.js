/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, Text} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import configureStore from './src/stores/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const {persistor, store} = configureStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <Text>A</Text>
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
