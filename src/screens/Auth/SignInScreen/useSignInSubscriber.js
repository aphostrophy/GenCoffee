import {useEffect, useCallback} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {signIn} from 'actions';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const useSignInSubscriber = navigation => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(token =>
      onAuthStateChanged(token),
    );
    return subscriber;
  }, [onAuthStateChanged]);

  const onAuthStateChanged = useCallback(
    token => {
      if (token) {
        dispatch(signIn(token.uid));
      }
    },
    [dispatch],
  );

  return {};
};

export default useSignInSubscriber;
