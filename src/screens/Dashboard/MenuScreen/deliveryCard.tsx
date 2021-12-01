import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Spacer } from '@components';
import {
  PoppinsBold,
  Poppins,
  Montserrat,
  MontserratBold,
  MontserratSemiBold,
} from '@styles/fonts';
import { WHITE, YELLOW } from '@styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    fontFamily: MontserratBold,
    color: WHITE,
    fontSize: 20,
  },
  subtitle: {
    fontFamily: MontserratSemiBold,
    color: WHITE,
    fontSize: 14,
  },
  icon: {
    width: 25,
    height: 25,
  },
  miniCardContainer: {
    flex: 1,
    width: '70%',
    justifyContent: 'center',
  },
  miniCardTop: {
    backgroundColor: YELLOW,
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  miniCardBottom: {
    backgroundColor: WHITE,
    flex: 2,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  miniCardTopTitle: {
    color: WHITE,
    fontFamily: PoppinsBold,
    fontSize: 12,
  },

  miniCardBottomLabel: {
    fontFamily: PoppinsBold,
    includeFontPadding: false,
    padding: 0,
    fontSize: 14,
  },
  miniCardBottomSmallLabel: {
    fontFamily: Poppins,
    includeFontPadding: false,
    padding: 0,
    fontSize: 12,
  },
  miniCardBottomButton: {
    backgroundColor: YELLOW,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  miniCardBottomButtonText: {
    fontFamily: PoppinsBold,
    color: WHITE,
    fontSize: 12,
  },
});

export { DeliveryCard };
