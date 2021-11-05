import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignitems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  activeButton: {
    color: '#673ab7',
    textAlign: 'center',
  },
  inactiveButton: {
    color: '#222',
    textAlign: 'center',
  },
});
