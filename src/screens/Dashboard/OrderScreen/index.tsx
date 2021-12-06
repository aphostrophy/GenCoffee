import React from 'react';
import { Text, View } from 'react-native';

import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { Container } from '@components';
import { OrderStackParamList, AppTabParamList, AppStackParamList } from '@types';

type NavigationProps = CompositeScreenProps<
  StackScreenProps<OrderStackParamList, 'Order'>,
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList>,
    StackScreenProps<AppStackParamList, 'AppTab'>
  >
>;

const OrderScreen = (): JSX.Element => {
  return (
    <Container statusBarStyle="dark-content">
      <View>
        <Text>Order</Text>
      </View>
    </Container>
  );
};

export default OrderScreen;
