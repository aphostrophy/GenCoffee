import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { IconFactory } from '@components';
import firestore from '@react-native-firebase/firestore';
import { OrderHistory } from '@types';
import { formatRupiah } from '@utils';

import { OrderOngoingCardStyle } from './styles';

interface DeliveryCardProps {
  orderOngoingData: OrderHistory;
  navigation: any;
  toggleTrigger: () => void;
}

const OrderOngoingCard = ({
  orderOngoingData,
  navigation,
  toggleTrigger,
}: DeliveryCardProps): JSX.Element => {
  const handleCancelOrder = async () => {
    await firestore().collection('order_ongoing').doc(orderOngoingData.id).delete();
    toggleTrigger();
  };

  return (
    <View style={[OrderOngoingCardStyle.container]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={[OrderOngoingCardStyle.infoTitle]}>Status</Text>
          <Text
            style={[
              OrderOngoingCardStyle.textBackgroundColor,
              OrderOngoingCardStyle.backgroundBlue,
            ]}
          >
            {orderOngoingData.status}
          </Text>
        </View>
        {orderOngoingData.status === 'pending' && (
          <TouchableOpacity onPress={handleCancelOrder}>
            <IconFactory
              type="FontAwesome5"
              name="times"
              style={OrderOngoingCardStyle.cancelIcon}
            />
          </TouchableOpacity>
        )}
      </View>
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
            borderWidth: 1,
            borderColor: '#C8C8C8',
            borderStyle: 'dashed',
            marginHorizontal: 35,
          }}
        ></View>

        <View style={{ flex: 1 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={[OrderOngoingCardStyle.infoTitle]}>Total</Text>
            <Text style={OrderOngoingCardStyle.textValue}>
              {formatRupiah(orderOngoingData.totalCost)}
            </Text>
          </View>
          <Text
            style={[
              OrderOngoingCardStyle.textBackgroundColor,
              OrderOngoingCardStyle.backgroundYellow,
            ]}
            onPress={() => {
              navigation.navigate('Detail', { id: orderOngoingData.id });
            }}
          >
            Lihat Detail
          </Text>
        </View>
      </View>
    </View>
  );
};

export { OrderOngoingCard };
