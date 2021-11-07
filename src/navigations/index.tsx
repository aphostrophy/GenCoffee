import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useAppSelector} from '@hooks/hooks';
import {RootStackParamList} from '@types';

import { Linking } from 'react-native';
import VersionCheck from 'react-native-version-check';

import AppStackNavigator from './app';
import AuthStackNavigator from './auth';

interface RootStackNavigatorProps {
  userToken: string | null;
}

const RootStack = createStackNavigator<RootStackParamList>();
const RootStackNavigator: React.FC<RootStackNavigatorProps> = ({userToken}) => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {userToken ? (
        <RootStack.Screen name="App" component={AppStackNavigator} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthStackNavigator} />
      )}
    </RootStack.Navigator>
  );
};

const RootNavigator = () => {
  const userToken = useAppSelector(state => state.useAuth.userToken);
  console.log(VersionCheck.getPackageName());
  console.log(VersionCheck.getCurrentBuildNumber());
  console.log(VersionCheck.getCurrentVersion());

  return (
    <NavigationContainer>
      <RootStackNavigator userToken={userToken} />
    </NavigationContainer>
  );
};

export default RootNavigator;
