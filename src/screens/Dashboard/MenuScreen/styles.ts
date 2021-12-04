import { StyleSheet, Dimensions } from 'react-native';
import { PoppinsBold, Poppins, MontserratBold, MontserratSemiBold } from '@styles/fonts';
import { WHITE, YELLOW, GRAY } from '@styles/colors';
const { width, height } = Dimensions.get('window');

const deliveryCardStyles = StyleSheet.create({
  container: {
    flex: 3,
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

const querySectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  picker: {
    borderColor: GRAY,
    zIndex: 10,
    height: width * 0.12,
  },
  dropDownContainerStyle: {
    borderColor: GRAY,
    zIndex: 10,
  },
  line: {
    backgroundColor: GRAY,
  },
  headerText: {
    fontFamily: PoppinsBold,
    fontSize: 16,
  },
});

const menuSectionStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const modalStyles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalBody: {
    backgroundColor: WHITE,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    width: width,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalRow: {
    alignItems: 'center',
    paddingVertical: height * 0.02,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: 24,
    color: GRAY,
    alignSelf: 'flex-end',
  },
  image: {
    width: 100,
    height: 100,
  },
  plusMinusIconWrapper: {
    backgroundColor: YELLOW,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusMinusIcon: {
    fontSize: 24,
    color: YELLOW,
    textAlign: 'center',
    includeFontPadding: false,
    padding: 0,
  },
  name: {
    fontFamily: PoppinsBold,
    fontSize: 16,
  },
  description: {
    fontFamily: Poppins,
    color: GRAY,
    fontSize: 12,
  },
  headerLabel: {
    fontFamily: PoppinsBold,
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberContainer: {
    borderColor: GRAY,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  button: {
    width: '60%',
    backgroundColor: YELLOW,
    paddingVertical: 7,
    borderRadius: 7,
  },
  buttonText: {
    color: WHITE,
    fontFamily: PoppinsBold,
  },
});

export { deliveryCardStyles, querySectionStyles, menuSectionStyles, modalStyles };
