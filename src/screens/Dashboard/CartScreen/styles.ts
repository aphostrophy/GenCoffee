import { StyleSheet, Dimensions } from 'react-native';
import {
  PoppinsBold,
  Poppins,
  MontserratBold,
  MontserratSemiBold,
  Montserrat,
  PoppinsSemiBold,
} from '@styles/fonts';
import { WHITE, YELLOW, GRAY, BLUE, RED } from '@styles/colors';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLUE,
    flex: 1,
  },
  header: {
    backgroundColor: BLUE,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: WHITE,
    paddingHorizontal: 10,
  },
  list: {
    flex: 1,
    width: '100%',
  },
  center: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  breadcrumb: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: GRAY,
    width: 120,
    borderRadius: 60,
    alignItems: 'center',
  },
  breadcrumbText: {
    fontFamily: MontserratSemiBold,
    textAlign: 'center',
    includeFontPadding: false,
    fontSize: 12,
    padding: 0,
    color: WHITE,
  },
  costLabel: {
    fontFamily: PoppinsBold,
  },
  cost: {
    fontFamily: PoppinsSemiBold,
  },
  checkout: {
    backgroundColor: YELLOW,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 0,
    height: 40,
  },
  checkoutText: {
    fontFamily: PoppinsBold,
    color: WHITE,
    fontSize: 16,
  },
  totalLabel: {
    fontFamily: PoppinsSemiBold,
  },
  totalPrice: {
    fontFamily: PoppinsBold,
  },
});

const deliveryCardStyles = StyleSheet.create({
  container: {
    borderColor: YELLOW,
    borderWidth: 1,
    height: width * 0.2,
    width: width * 0.7,
    borderRadius: 6,
    overflow: 'hidden',
  },
  header: {
    flex: 2,
    backgroundColor: YELLOW,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    fontFamily: PoppinsBold,
    color: WHITE,
  },
  address: {
    fontFamily: MontserratSemiBold,
  },
  district: {
    fontFamily: Montserrat,
  },
});

const productCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    aspectRatio: 1.2,
  },
  plusMinusIcon: {
    fontSize: 24,
    color: YELLOW,
    textAlign: 'center',
    includeFontPadding: false,
    padding: 0,
  },
  numberContainer: {
    borderColor: GRAY,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  name: {
    fontFamily: PoppinsBold,
  },
  price: {
    fontFamily: PoppinsSemiBold,
  },
  options: {
    fontFamily: Poppins,
    color: GRAY,
    fontSize: 12,
  },
});

export { styles, deliveryCardStyles, productCardStyles };