import React from 'react';
import { View, Text } from 'react-native';
import { deliveryCardStyles as styles } from './styles';

interface DeliveryCardProps {
  address: string | null;
  district: string | null;
}

const DeliveryCard = ({ address, district }: DeliveryCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Diantar ke</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.district}>{district}</Text>
      </View>
    </View>
  );
};

export { DeliveryCard };
