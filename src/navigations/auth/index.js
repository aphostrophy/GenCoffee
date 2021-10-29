import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen} from 'screens';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  const screenNames = {
    SignIn: 'SignIn',
    SignUp: 'SignUp',
  };

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={screenNames.SignIn} component={SignInScreen} />
      <AuthStack.Screen name={screenNames.SignUp} component={SignInScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
