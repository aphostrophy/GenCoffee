import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';

import {useSignIn} from '@hooks';
import {ScreenCarousel} from '@components';
import {AuthStackParamList} from '@types';

import {BoardOne} from './boardOne';
import {BoardTwo} from './boardTwo';
import styles from './styles';

const INTERVALS = 2;

type Props = StackScreenProps<AuthStackParamList, 'SignIn'>;
interface SignInScreenProps {
  navigation: Props['navigation'];
}

const SignInScreen: React.FC<SignInScreenProps> = ({navigation}) => {
  const {signInWithPhoneNumber, confirmCode} = useSignIn();
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const [code, setCode] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <ScreenCarousel
        goBack={() => navigation.goBack()}
        containerStyle={{width: `${100 * INTERVALS}`}}>
        <BoardOne
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          signInWithPhoneNumber={signInWithPhoneNumber}
        />
        <BoardTwo code={code} setCode={setCode} confirmCode={confirmCode} />
      </ScreenCarousel>
    </SafeAreaView>
  );
};

export default SignInScreen;
