import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';

import {signOut} from 'actions';

const useSignOut = () => {
  const dispatch = useDispatch();
  async function onSignOut() {
    try {
      await auth().signOut();
      dispatch(signOut());
    } catch (err) {
      console.log('Err during sign out', err.message);
    }
  }

  return {onSignOut};
};

export default useSignOut;
