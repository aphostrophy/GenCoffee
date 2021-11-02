import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native';

import {useSignIn} from '@hooks';
import {Input} from '@components';

import useSignInSubscriber from './useSignInSubscriber';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignInScreen = ({navigation}) => {
  useSignInSubscriber();
  const {onGoogleButtonPress, signInWithPhoneNumber, confirmCode} = useSignIn();
  const [phoneNumber, setPhoneNumber] = useState('');

  const [code, setCode] = useState('');

  return (
    <SafeAreaView>
      <Text>SignIn Screen</Text>
      <Input
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+62' + phoneNumber)} //Format : +62XXXXXXXXXX
      />
      <Input value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode(code)} />
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
    </SafeAreaView>
  );
};

export default SignInScreen;
