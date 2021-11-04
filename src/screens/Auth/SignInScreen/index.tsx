import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {useSignIn} from '@hooks';
import {Input} from '@components';
import {AuthStackParamList} from '@types';

import useSignInSubscriber from './useSignInSubscriber';

type Props = StackScreenProps<AuthStackParamList, 'SignIn'>;

const SignInScreen: React.FC = () => {
  useSignInSubscriber();
  const {onGoogleButtonPress, signInWithPhoneNumber, confirmCode} = useSignIn();
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const [code, setCode] = useState<string>('');

  return (
    <SafeAreaView>
      <Text>SignIn Screen</Text>
      <Input
        value={phoneNumber}
        onChangeText={(text: string): void => setPhoneNumber(text)}
        keyboardType="phone-pad"
        placeHolder="Nomor Handphone kamu"
      />
      <Button
        title="Phone Number Sign In"
        onPress={(): Promise<void> =>
          signInWithPhoneNumber('+62' + phoneNumber)
        }
      />
      <Input value={code} onChangeText={(text: string) => setCode(text)} />
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
