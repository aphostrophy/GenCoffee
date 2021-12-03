import { Dimensions, StyleSheet } from 'react-native';
import { PoppinsBold, Poppins, MontserratBold, MontserratSemiBold } from '@styles/fonts';
import { WHITE, YELLOW, GRAY } from '@styles/colors';

const { width } = Dimensions.get('window');

const productCardStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    resizeMode: 'cover',
  },
  imageContainer: {},
  contentContainer: {},
  name: {},
  description: {},
  price: {},
  orderButton: {},
  buttonText: {},
  plusIcon: {},
});

export { productCardStyles };
