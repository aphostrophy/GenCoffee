import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {useSignIn} from '@hooks';
import {Input, IconFactory} from '@components';
import {AuthStackParamList, IconTypes} from '@types';

import styles from './styles';

type Props = StackScreenProps<AuthStackParamList, 'SignIn'>;

const SignInScreen: React.FC = () => {
  const {signInWithPhoneNumber, confirmCode} = useSignIn();
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const [code, setCode] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <IconFactory
          type={IconTypes.fontAwesome5}
          name="user-alt"
          style={[styles.icon]}
        />
      </View>
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
    </SafeAreaView>
  );
};

export default SignInScreen;
