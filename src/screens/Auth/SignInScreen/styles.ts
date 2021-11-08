import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {WHITE, BLUE, BLACK} from '@styles/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: height * 0.1,
    backgroundColor: BLUE,
  },
  row:{
    flexDirection: 'row',
  },
  icon: {
    width: height * 0.05,
    height: height * 0.05,
  },
});
