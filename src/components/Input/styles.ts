import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {BLACK, GRAY} from '@styles/colors';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    height: width * 0.13,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 3,
    marginVertical: width * 0.02,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    textAlign: 'center',
    fontSize: RFValue(16),
  },
  placeholder: {
    fontSize: RFValue(14),
    position: 'absolute',
    textAlign: 'center',
    alignSelf: 'center',
    color: 'black',
  },
});
