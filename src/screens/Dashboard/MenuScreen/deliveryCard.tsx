import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Spacer } from '@components';
import { PoppinsBold, Poppins } from '@styles/fonts';
import { WHITE } from '@styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DeliveryCard = (): JSX.Element => {
  return (
    <LinearGradient colors={['#458FFF', '#AACCFF']} style={styles.container}>
      <View style={[styles.row, styles.topSection]}>
        <Image source={require('@assets/icons/motorcycle.png')} style={styles.icon} />
        <Spacer width={10} />
        <Text style={styles.title}>Diantar</Text>
        <Spacer width={10} />
        <Text style={styles.subtitle}>{`ganti ke 'Ambil Sendiri' >`}</Text>
      </View>
      <View style={styles.bottomSection}>
        <MiniCard />
      </View>
    </LinearGradient>
  );
};

const MiniCard = (): JSX.Element => {
  return (
    <View style={styles.miniCardContainer}>
      <View style={styles.row}>
        <Text>Diantar ke</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text>Jl. Ganesha no 10</Text>
          <Text>Dago, Bandung</Text>
        </View>
        <TouchableOpacity>
          <Text>Ganti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    paddingHorizontal: 25,
    paddingVertical: 18,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  topSection: {
    flex: 1,
  },
  bottomSection: {
    flex: 2,
  },
  title: {
    fontFamily: PoppinsBold,
    color: WHITE,
    fontSize: 20,
  },
  subtitle: {
    fontFamily: Poppins,
    color: WHITE,
    fontSize: 14,
  },
  icon: {
    width: 25,
    height: 25,
  },
  miniCardContainer: {
    flex: 1,
    width: '60%',
    justifyContent: 'center',
  },
});

export { DeliveryCard };
