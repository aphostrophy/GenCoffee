import React from 'react';
import { Button, Text, View } from 'react-native';

import { OrderHistory } from '@types';

import { OrderHistoryCardStyle } from './styles';

interface DeliveryCardProps {
  orderHistoryData: OrderHistory;
}

const OrderHistoryCard = ({ orderHistoryData }: DeliveryCardProps): JSX.Element => {
  return (
    <View style={[OrderHistoryCardStyle.container]}>
      <View style={{ flex: 1 }}>
        {/* <Text style={OrderHistoryCardStyle.dateText}>
          {orderHistoryData.createdAt && orderHistoryData.createdAt.toDate().toDateString()}
        </Text> */}
        <Text style={OrderHistoryCardStyle.idText}>ID 1234</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={OrderHistoryCardStyle.priceText}>Rp. {orderHistoryData.totalCost}</Text>
      </View>
    </View>
  );
};

export { OrderHistoryCard };
