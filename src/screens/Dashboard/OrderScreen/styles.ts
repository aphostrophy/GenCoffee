import { StyleSheet } from 'react-native';
import { WHITE, YELLOW, GRAY, BLUE, RED } from '@styles/colors';
import { PoppinsBold, Poppins, MontserratBold, MontserratSemiBold } from '@styles/fonts';

const OrderOngoingCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  infoTitle: {
    fontSize: 19,
    marginBottom: 2,
    fontWeight: '600',
    fontFamily: Poppins,
  },
  textBackgroundColor: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#458FFF',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 21,
    textTransform: 'capitalize',
    borderRadius: 10,
  },
  textValue: { fontSize: 16, fontWeight: '900' },
});

const OrderHistoryCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 17,
    fontWeight: '600',
  },
  idText: {
    fontSize: 20,
    fontWeight: '900',
  },
  priceText: {
    fontSize: 22,
    fontWeight: '700',
  },
});

const OrderMainStyle = StyleSheet.create({
  navigation: {
    borderWidth: 3,
    borderColor: YELLOW,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 30,
    marginBottom: 10,
    padding: 8,
    borderRadius: 8,
  },
  textNavigation: {
    color: YELLOW,
    flex: 1,
    fontSize: 17,
    textAlign: 'center',
    marginHorizontal: 5,
    borderRadius: 4,
    paddingVertical: 10,
  },
  textNavgationActive: {
    backgroundColor: YELLOW,
    color: WHITE,
  },
});

export { OrderOngoingCardStyle, OrderMainStyle, OrderHistoryCardStyle };
