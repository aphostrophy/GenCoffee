import React from 'react';
import { View, Text } from 'react-native';
import { deliveryCardStyles as styles } from './styles';

const DeliveryCard = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Diantar ke</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.address}>Jl. Ganesha no.10</Text>
        <Text style={styles.district}>Dago, Bandung</Text>
      </View>
    </View>
  );
};

export { DeliveryCard };
