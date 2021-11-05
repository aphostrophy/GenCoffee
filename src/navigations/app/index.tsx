import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppTabParamList} from '@types';

import MenuStack from './menuStack';
import OrderStack from './orderStack';
import ProfileStack from './profileStack';

import {BottomTabBar} from '@components';

const AppTab = createBottomTabNavigator<AppTabParamList>();

const AppTabNavigator: React.FC = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {position: 'absolute'},
      }}
      tabBar={props => <BottomTabBar {...props} />}
      initialRouteName="MenuStack">
      <AppTab.Screen name="OrderStack" component={OrderStack} />
      <AppTab.Screen name="MenuStack" component={MenuStack} />
      <AppTab.Screen name="ProfileStack" component={ProfileStack} />
    </AppTab.Navigator>
  );
};

export default AppTabNavigator;
