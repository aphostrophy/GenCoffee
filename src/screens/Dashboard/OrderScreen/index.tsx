import React from 'react';
import { Text, View } from 'react-native';

import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { Container } from '@components';
import { OrderStackParamList, AppTabParamList } from '@types';

type Props = CompositeScreenProps<
  StackScreenProps<OrderStackParamList, 'Order'>,
  BottomTabScreenProps<AppTabParamList>
>;

const OrderScreen: React.FC = () => {
  return (
    <Container statusBarStyle="dark-content">
      <View>
        <Text>Order</Text>
      </View>
    </Container>
  );
};

export default OrderScreen;
