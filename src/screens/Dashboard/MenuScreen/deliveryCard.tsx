import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import { Spacer } from '@components';
import { deliveryCardStyles as styles } from './styles';

const DeliveryCard = (): JSX.Element => {
  return (
    <LinearGradient colors={['#458FFF', '#AACCFF']} style={styles.container}>
      <View style={[styles.row, styles.topSection]}>
        <Image source={require('@assets/icons/motorcycle.png')} style={styles.icon} />
        <Spacer width={10} />
        <Text style={styles.title}>Diantar</Text>
        <Spacer width={10} />
        <Text style={styles.subtitle}>{`ganti ke 'Ambil Sendiri'`}</Text>
      </View>
      <Spacer height={15} />
      <View style={styles.bottomSection}>
        <MiniCard />
      </View>
    </LinearGradient>
  );
};

const MiniCard = (): JSX.Element => {
  return (
    <View style={styles.miniCardContainer}>
      <View style={[styles.row, styles.miniCardTop]}>
        <Text style={styles.miniCardTopTitle}>Diantar ke</Text>
      </View>
      <View style={[styles.row, styles.miniCardBottom]}>
        <View style={styles.column}>
          <Text style={styles.miniCardBottomLabel}>Jl. Ganesha no 10</Text>
          <Text style={styles.miniCardBottomSmallLabel}>Dago, Bandung</Text>
        </View>
        <TouchableOpacity style={styles.miniCardBottomButton}>
          <Text style={styles.miniCardBottomButtonText}>Ganti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { DeliveryCard };
