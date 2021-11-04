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
      initialRouteName="MenuStack">
      <AppTab.Screen name="OrderStack" component={OrderStack} />
      <AppTab.Screen name="MenuStack" component={MenuStack} />
      <AppTab.Screen name="ProfileStack" component={ProfileStack} />
    </AppTab.Navigator>
  );
};

export default AppTabNavigator;
