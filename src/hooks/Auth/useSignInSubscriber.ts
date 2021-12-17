import { useEffect, useCallback } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import { signIn } from '@action-creators';

import { initProfile } from '@slices/ProfileSlice';
import { useAppDispatch } from '@hooks/hooks';
import { User, Secret } from '@types';

const useSignInSubscriber = () => {
  const dispatch = useAppDispatch();

  const onAuthStateChanged = useCallback(
    async (token): Promise<void> => {
      if (token) {
        const deviceToken = await messaging().getToken();
        const ref = firestore().collection<User>('users').doc(token.uid);
        const privateRef = firestore()
          .collection<Secret>(`users/${token.uid}/private`)
          .doc('secret');
        ref.update({
          deviceToken: deviceToken,
        });
        console.log('============');
        const user = (await ref.get()).data();
        const userSecret = (await privateRef.get()).data();
        console.log(user);
        console.log(userSecret);
        if (user) {
          if (userSecret) {
            const profile = {
              name: user.name ? user.name : null,
              phoneNumber: user.phoneNumber ? user.phoneNumber : null,
              district: user.address?.district ? user.address?.district : null,
              fullAddress: user.address?.streetAddress ? user.address?.streetAddress : null,
              addressNote: user.address?.addressNote ? user.address?.addressNote : null,
              points: userSecret.points,
            };
            dispatch(initProfile(profile));
          }
        }
        dispatch(signIn(token.uid));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(token => onAuthStateChanged(token));
    return subscriber;
  }, [onAuthStateChanged]);

  return {};
};

export { useSignInSubscriber };
