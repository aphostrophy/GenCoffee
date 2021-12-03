import { Dimensions, StyleSheet } from 'react-native';
import { PoppinsBold, Poppins, MontserratBold, MontserratSemiBold } from '@styles/fonts';
import { WHITE, YELLOW, GRAY } from '@styles/colors';

const { width } = Dimensions.get('window');

const productCardStyles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    width: width * 0.415,
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
  },
  image: {
    width: width * 0.415,
    height: width * 0.415,
    resizeMode: 'cover',
  },
  imageContainer: {
    flex: 2,
    backgroundColor: 'yellow',
    width: width * 0.415,
    padding: 0,
    margin: 0,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  name: {
    fontFamily: PoppinsBold,
    fontSize: 20,
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
