import {useEffect, useCallback} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {signIn} from '@action-creators';

const useSignInSubscriber = () => {
  const dispatch = useDispatch();

  const onAuthStateChanged = useCallback(
    (token): void => {
      if (token) {
        dispatch(signIn(token.uid));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(token =>
      onAuthStateChanged(token),
    );
    return subscriber;
  }, [onAuthStateChanged]);

  return {};
};

export default useSignInSubscriber;