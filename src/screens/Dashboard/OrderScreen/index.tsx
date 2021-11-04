import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';

import {OrderStackParamList, AppTabParamList} from '@types';

type Props = CompositeScreenProps<
  StackScreenProps<OrderStackParamList, 'Order'>,
  BottomTabScreenProps<AppTabParamList>
>;

const OrderScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Order</Text>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
