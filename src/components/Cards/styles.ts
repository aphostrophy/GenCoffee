import { Dimensions, StyleSheet } from 'react-native';
import { PoppinsBold, Poppins, MontserratBold, MontserratSemiBold } from '@styles/fonts';
import { WHITE, YELLOW, GRAY } from '@styles/colors';

const { width } = Dimensions.get('window');

const productCardStyles = StyleSheet.create({
  container: {
    width: width * 0.43,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    height: width * 0.7,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  imageContainer: {
    flex: 7,
    width: '100%',
    padding: 0,
    margin: 0,
  },
  contentContainer: {
    flex: 5,
    backgroundColor: WHITE,
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  name: {
    fontFamily: PoppinsBold,
    fontSize: 14,
  },
  description: {
    fontFamily: Poppins,
    color: GRAY,
  },
  price: {
    fontFamily: Poppins,
  },
  orderButton: {
    backgroundColor: YELLOW,
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 3,
  },
  buttonText: {
    fontFamily: PoppinsBold,
    textAlign: 'center',
    color: WHITE,
    fontSize: 15,
  },
  textContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { productCardStyles };
