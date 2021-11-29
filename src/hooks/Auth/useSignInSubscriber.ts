import { useEffect, useCallback } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import { signIn } from '@action-creators';

import { useAppDispatch } from '@hooks/hooks';

const useSignInSubscriber = () => {
  const dispatch = useAppDispatch();

  const onAuthStateChanged = useCallback(
    (token): void => {
      if (token) {
        messaging()
          .getToken()
          .then(deviceToken => {
            firestore().collection('users').doc(token.uid).update({
              deviceToken: deviceToken,
            });
          });
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
