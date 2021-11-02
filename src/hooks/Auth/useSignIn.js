import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const useSignIn = navigation => {
  const [confirm, setConfirm] = useState(null);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  async function signInWithPhoneNumber(number) {
    const confirmation = await auth().signInWithPhoneNumber(number);
    setConfirm(confirmation);
  }

  async function confirmCode(code) {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  return {onGoogleButtonPress, signInWithPhoneNumber, confirmCode};
};

export default useSignIn;
