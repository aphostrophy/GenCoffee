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

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Text>A</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
