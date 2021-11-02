import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DashboardScreen} from '@screens/index';

const AppStack = createStackNavigator();

const AppStackNavigator = () => {
  const screenNames = {
    Dashboard: 'Dashboard',
  };

  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={screenNames.Dashboard}>
      <AppStack.Screen
        name={screenNames.Dashboard}
        component={DashboardScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
