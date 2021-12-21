import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { OrderHistoryScreen, OrderOngoingScreen, OngoingOrderDetail } from '@screens';
import { OrderStackParamList } from '@types';

const OrderStack = createMaterialTopTabNavigator();
const OrderStackOuter = createStackNavigator<OrderStackParamList>();

const OngoingOrderNavigator: React.FC = () => {
  return (
    <OrderStackOuter.Navigator screenOptions={{ headerShown: false }}>
      <OrderStack.Screen name="OngoingOrder" component={OrderOngoingScreen} />
      <OrderStack.Screen name="Detail" component={OngoingOrderDetail} />
    </OrderStackOuter.Navigator>
  );
};

const OrderStackNavigator: React.FC = () => {
  return (
    <OrderStack.Navigator initialRouteName="Berlangsung">
      <OrderStack.Screen name="Berlangsung" component={OngoingOrderNavigator} />
      <OrderStack.Screen name="Lampau" component={OrderHistoryScreen} />
    </OrderStack.Navigator>
  );
};

export default OrderStackNavigator;
