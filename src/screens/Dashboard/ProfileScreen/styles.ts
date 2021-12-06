import { WHITE, YELLOW } from '@styles/colors';
import { Poppins, PoppinsBold } from '@styles/fonts';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
  },
  buttonsContainer: {
    marginTop: 'auto',
    marginBottom: 50,
    alignItems: 'center',
  },
  header: {
    fontFamily: PoppinsBold,
  },
  text: {
    fontFamily: Poppins,
  },
  logoutButton: {
    borderColor: YELLOW,
    borderWidth: 2,
  },
  logoutText: {
    fontFamily: PoppinsBold,
    color: YELLOW,
    fontSize: 16,
  },
  editProfileButton: {
    backgroundColor: YELLOW,
  },
  editProfileText: {
    fontFamily: PoppinsBold,
    color: WHITE,
    fontSize: 16,
  },
});

export { styles };
