import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppTabParamList} from '@types';

import MenuStack from './menuStack';
import OrderStack from './orderStack';
import ProfileStack from './profileStack';

const AppTab = createBottomTabNavigator<AppTabParamList>();

const AppTabNavigator: React.FC = () => {
  return (
    <AppTab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Menu">
      <AppTab.Screen name="Order" component={OrderStack} />
      <AppTab.Screen name="Menu" component={MenuStack} />
      <AppTab.Screen name="Profile" component={ProfileStack} />
    </AppTab.Navigator>
  );
};

export default AppTabNavigator;
