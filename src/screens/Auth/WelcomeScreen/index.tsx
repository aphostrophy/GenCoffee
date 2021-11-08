import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';

import {FancyButton} from '@components';
import {AuthStackParamList} from '@types';
import {useSignIn} from '@hooks';

import styles from './styles';

type Props = StackScreenProps<AuthStackParamList, 'Welcome'>;

interface WelcomeScreenProps {
  navigation: Props['navigation'];
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const {googleSignIn} = useSignIn();

  const onGoogleButtonPress = async () => {
    try {
      await googleSignIn();
      navigation.navigate('SignIn');
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log('Error during google auth', err.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FancyButton
        onPress={() => onGoogleButtonPress()}
        containerStyle={[styles.buttonContainer, styles.googleButtonContainer]}>
        <Text style={styles.googleButtonText}>Daftar dengan Google</Text>
      </FancyButton>
      <FancyButton
        onPress={() => onGoogleButtonPress()}
        containerStyle={[styles.buttonContainer, styles.phoneButtonContainer]}>
        <Text style={styles.phoneButtonText}>Daftar dengan No. Ponsel</Text>
      </FancyButton>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
