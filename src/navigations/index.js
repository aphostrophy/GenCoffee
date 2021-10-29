import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => {
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen name="App" />
    ) : (
      <RootStack.Screen name="Auth" />
    )}
  </RootStack.Navigator>;
};

const RootNavigator = () => {
  const userToken = useSelector(state => state.useSignIn.userToken);

  return (
    <NavigationContainer>
      <RootStackScreen userToken={userToken} />
    </NavigationContainer>
  );
};

export default RootNavigator;
