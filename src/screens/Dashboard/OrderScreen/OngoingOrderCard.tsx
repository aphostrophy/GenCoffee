import React from 'react';
import { Button, Text, View } from 'react-native';

import { OrderHistory } from '@types';

import { OrderOngoingCardStyle } from './styles';

interface DeliveryCardProps {
  orderOngoingData: OrderHistory;
  navigation: any;
}

const OrderOngoingCard = ({ orderOngoingData, navigation }: DeliveryCardProps): JSX.Element => {
  return (
    <View style={[OrderOngoingCardStyle.container]}>
      <Text style={[OrderOngoingCardStyle.infoTitle]}>Status</Text>
      <Text style={[OrderOngoingCardStyle.textBackgroundColor]}>{orderOngoingData.status}</Text>
      <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
        <View style={{ flex: 1 }}>
          <View style={{ margin: 2 }}>
            <Text style={[OrderOngoingCardStyle.infoTitle]}>Dikirim dari</Text>
            <Text style={OrderOngoingCardStyle.textValue}>
              {orderOngoingData.shipping.origin.name}
            </Text>
          </View>
          <View style={{ margin: 2 }}>
            <Text style={[OrderOngoingCardStyle.infoTitle]}>Dikirim ke</Text>
            <Text style={OrderOngoingCardStyle.textValue}>
              {orderOngoingData.shipping.address.district}
            </Text>
          </View>
        </View>

        <View
          style={{
            borderWidth: 0.8,
            borderColor: '#C8C8C8',
            borderStyle: 'dashed',
            marginHorizontal: 35,
          }}
        ></View>

        <View style={{ flex: 1 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={[OrderOngoingCardStyle.infoTitle]}>Total</Text>
            <Text style={OrderOngoingCardStyle.textValue}>{orderOngoingData.totalCost}</Text>
          </View>
          <Button
            onPress={() => {
              navigation.navigate('Detail');
            }}
            title="Lihat Detail"
            color="#F6B700"
          />
        </View>
      </View>
    </View>
  );
};

export { OrderOngoingCard };
