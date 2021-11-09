import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {WHITE, BLUE, YELLOW, BLACK} from '@styles/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: BLUE,
    width: width,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: RFValue(24),
    color: WHITE,
  },
  mailIcon: {
    width: height * 0.04,
    height: height * 0.04,
    resizeMode: 'contain',
  },
  title: {
    fontSize: RFValue(28),
    fontWeight: 'bold',
    color: WHITE,
  },

  inputContainer: {
    backgroundColor: WHITE,
    width: width * 0.85,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: width * 0.08,
    paddingVertical: width * 0.06,
  },
  button: {
    borderRadius: 6,
    backgroundColor: YELLOW,
  },
  buttonText: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: WHITE,
  },
  label: {
    color: BLACK,
    fontSize: RFValue(14),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  labelCenter: {
    color: BLACK,
    fontSize: RFValue(14),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  labelWrapper: {
    width: '100%',
  },
  backgroundHouse: {
    resizeMode: 'cover',
    height: height * 0.4,
  },

  otpView: {
    width: '80%',
    height: 200,
    color: 'black',
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black',
    borderBottomColor: '#17BED0',
  },
});
