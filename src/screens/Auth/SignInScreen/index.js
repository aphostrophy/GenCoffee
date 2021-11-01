import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button, TextInput} from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const SignInScreen = ({navigation}) => {
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  return (
    <SafeAreaView>
      <Text>SignIn Screen</Text>
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('')} //Format : +62XXXXXXXXXX
      />
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
      <Button
        title="Google Sign-In"
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
      />
    </SafeAreaView>
  );
};

export default SignInScreen;
