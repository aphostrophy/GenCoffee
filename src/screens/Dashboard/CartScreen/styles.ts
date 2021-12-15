import { StyleSheet, Dimensions } from 'react-native';
import {
  PoppinsBold,
  Poppins,
  MontserratBold,
  MontserratSemiBold,
  Montserrat,
} from '@styles/fonts';
import { WHITE, YELLOW, GRAY, BLUE } from '@styles/colors';
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
    backgroundColor: WHITE,
    alignItems: 'center',
  },
});

const deliveryCardStyles = StyleSheet.create({
  container: {
    borderColor: YELLOW,
    borderWidth: 1,
    height: width * 0.2,
    width: '80%',
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

export { styles, deliveryCardStyles };
