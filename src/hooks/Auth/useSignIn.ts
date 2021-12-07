import { useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';

interface useSignInReturnInterface {
  googleSignIn: () => Promise<any>;
  signInWithPhoneNumber: (number: string) => Promise<void>;
  confirmCode: (code: string) => Promise<void>;
}

const useSignIn = (): useSignInReturnInterface => {
  const [confirm, setConfirm] = useState<null | FirebaseAuthTypes.ConfirmationResult>(null);

  async function googleSignIn() {
    return firestore().runTransaction(async transaction => {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const userCredential = await auth().signInWithCredential(googleCredential);

      const user = userCredential.user;
      const userDocumentSnapshot = await firestore()
        .collection('users')
        .doc(userCredential.user.uid)
        .get();

      if (userDocumentSnapshot.exists) {
        await transaction.update(firestore().collection('users').doc(user.uid), {
          name: user.displayName,
        });
      } else {
        await transaction.set(firestore().collection('users').doc(user.uid), {
          uid: user.uid,
          name: user.displayName,
        });
        await transaction.set(firestore().collection(`users/${user.uid}/private`).doc('secret'), {
          role: 'customer',
          points: 0,
        });
      }
    });
  }

  async function signInWithPhoneNumber(number: string) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(number);
      setConfirm(confirmation);
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw err;
      }
    }
  }

  async function confirmCode(code: string) {
    if (confirm) {
      try {
        const userCredential = await confirm.confirm(code);
        const user = userCredential?.user;
        if (!user) {
          throw new Error('something went wrong');
        } else {
          const userDocumentSnapshot = await firestore().collection('users').doc(user.uid).get();

          if (!userDocumentSnapshot.exists) {
            await firestore().collection('users').doc(user.uid).set({
              uid: user.uid,
              points: 0,
              phoneNumber: user.phoneNumber,
            });
          }
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log('Invalid code.', err.message);
        }
      }
    }
  }

  return { googleSignIn, signInWithPhoneNumber, confirmCode };
};

export { useSignIn };
