import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {WHITE, BLUE} from '@styles/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: BLUE,
    justifyContent: 'center',
    height: height * 0.08,
  },
  container: {
    justifyContent: 'space-between',
    alignitems: 'center',
    width: 0.2 * width,
    marginHorizontal: 0.02 * width,
    backgroundColor: 'red',
    paddingVertical: 5,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    color: WHITE,
    textAlign: 'center',
  },
  inactiveButton: {
    color: WHITE,
    textAlign: 'center',
  },
  inactiveIcon: {
    fontSize: RFValue(26),
    color: WHITE,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIcon: {
    fontSize: RFValue(26),
    color: BLUE,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  iconContainer: {
    width: 0.1 * width,
    height: 0.1 * width,
    backgroundColor: 'green',
    borderRadius: width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
