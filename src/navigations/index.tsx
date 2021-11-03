import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import AppStackNavigator from './app';
import AuthStackNavigator from './auth';

interface RootStackProps {
  userToken: string;
}

const RootStack = createStackNavigator();
const RootStackScreen: React.FC<RootStackProps> = ({userToken}) => {
  console.log('USER TOKEN', userToken);
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
  const userToken = useSelector(state => state.useAuth.userToken);

  return (
    <NavigationContainer>
      <RootStackScreen userToken={userToken} />
    </NavigationContainer>
  );
};

export default RootNavigator;
