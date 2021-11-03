import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';

import {signOut} from '@action-creators';

const useSignOut = () => {
  const dispatch = useDispatch();
  async function onSignOut() {
    try {
      await auth().signOut();
      dispatch(signOut());
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log('Error during sign out', err.message);
      }
    }
  }

  return {onSignOut};
};

export default useSignOut;
