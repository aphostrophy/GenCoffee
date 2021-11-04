import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OrderScreen} from '@screens';
import {OrderStackParamList} from '@types';

const OrderStack = createStackNavigator<OrderStackParamList>();

const OrderStackNavigator: React.FC = () => {
  return (
    <OrderStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Order">
      <OrderStack.Screen name="Order" component={OrderScreen} />
    </OrderStack.Navigator>
  );
};

export default OrderStackNavigator;
