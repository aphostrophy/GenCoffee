import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';

import {useSignIn} from '@hooks';
import {ScreenCarousel, Spacer} from '@components';
import {AuthStackParamList} from '@types';

import {BoardOne} from './boardOne';
import {BoardTwo} from './boardTwo';
import styles from './styles';
import {Image} from 'react-native';

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
      <ScreenCarousel goBack={() => navigation.goBack()}>
        <BoardOne
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          signInWithPhoneNumber={signInWithPhoneNumber}
        />
        <BoardTwo code={code} setCode={setCode} confirmCode={confirmCode} />
      </ScreenCarousel>
      <Spacer height={40} />
      <Image
        style={styles.backgroundHouse}
        source={require('@assets/background-image/man_inside_drinking_coffee.png')}
      />
    </SafeAreaView>
  );
};

export default SignInScreen;
