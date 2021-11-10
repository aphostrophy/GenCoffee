import {useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';

const useSignIn = () => {
  const [confirm, setConfirm] =
    useState<null | FirebaseAuthTypes.ConfirmationResult>(null);

  async function googleSignIn() {
    return firestore().runTransaction(async transaction => {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );

      console.log(userCredential);
      const user = userCredential.user;
      transaction.set(firestore().collection('users').doc(user.uid), {
        uid: user.uid,
        name: user.displayName,
      });
    });
  }

  async function signInWithPhoneNumber(number: string) {
    const confirmation = await auth().signInWithPhoneNumber(number);
    setConfirm(confirmation);
  }

  async function confirmCode(code: string) {
    if (confirm) {
      try {
        await confirm.confirm(code);
      } catch (error) {
        console.log('Invalid code.');
      }
    }
  }

  return {googleSignIn, signInWithPhoneNumber, confirmCode};
};

export {useSignIn};
