import { Dimensions, StyleSheet } from 'react-native';
import { PoppinsBold, Poppins, MontserratBold, MontserratSemiBold } from '@styles/fonts';
import { WHITE, YELLOW, GRAY, BLACK } from '@styles/colors';

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
    backgroundColor: WHITE,
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

const memberCardStyles = StyleSheet.create({
  container: {
    borderColor: BLACK,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: 200,
  },
  leftColumn: {
    flexDirection: 'column',
  },
  rightColumn: {
    flexDirection: 'column',
  },
  tag: {
    backgroundColor: YELLOW,
    width: '45%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  tagText: {
    fontFamily: PoppinsBold,
    color: WHITE,
  },
  member: {
    position: 'absolute',
    right: 10,
    bottom: 0,
  },
  name: {
    fontFamily: PoppinsBold,
    fontSize: 25,
  },
  points: {
    fontFamily: MontserratSemiBold,
    fontSize: 20,
  },
});

export { productCardStyles, memberCardStyles };
