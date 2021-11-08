import React, {useState, useRef, useEffect, useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  BackHandler,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {useSignIn} from '@hooks';
import {Input, IconFactory, Spacer, FancyButton} from '@components';
import {AuthStackParamList} from '@types';

import styles from './styles';
import {useFocusEffect} from '@react-navigation/native';

const INTERVALS = 2;
const {width: WIDTH} = Dimensions.get('window');

type Props = StackScreenProps<AuthStackParamList, 'SignIn'>;
interface SignInScreenProps {
  navigation: Props['navigation'];
}

const SignInScreen: React.FC<SignInScreenProps> = ({navigation}) => {
  const {signInWithPhoneNumber, confirmCode} = useSignIn();
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const [code, setCode] = useState<string>('');

  const [pageIndex, setPageIndex] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);

  const toNextPage = () => {
    if (scrollViewRef.current !== null) {
      scrollViewRef.current.scrollTo({
        x: WIDTH * (pageIndex + 1),
        animated: true,
      });
      setPageIndex(index => index + 1);
    }
  };

  const toPrevPage = useCallback(() => {
    if (scrollViewRef.current !== null) {
      if (pageIndex === 0) {
        navigation.goBack();
      } else {
        scrollViewRef.current.scrollTo({
          x: WIDTH * (pageIndex - 1),
          animated: true,
        });
        setPageIndex(index => index - 1);
      }
    }
    return true;
  }, [navigation, pageIndex]);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', toPrevPage);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', toPrevPage);
    }, [toPrevPage]),
  );

  return (
    <ScrollView
      horizontal
      pagingEnabled
      ref={scrollViewRef}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={200}
      contentContainerStyle={{width: `${100 * INTERVALS}%`}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <IconFactory
            type="FontAwesome5"
            name="user-alt"
            style={[styles.icon]}
          />
          <Spacer width={10} />
          <Text style={styles.title}>Daftar</Text>
        </View>
        <Spacer height={10} />
        <View style={styles.inputContainer}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>No. HP</Text>
          </View>
          <Input
            value={phoneNumber}
            onChangeText={(text: string): void => setPhoneNumber(text)}
            keyboardType="phone-pad"
          />
          <Spacer height={10} />
          <FancyButton
            containerStyle={styles.button}
            onPress={async (): Promise<void> => {
              // await signInWithPhoneNumber('+62' + phoneNumber);
              toNextPage();
            }}>
            <Image
              style={styles.mailIcon}
              source={require('@assets/icons/mail.png')}
            />
            <Spacer width={8} />
            <Text style={styles.buttonText}>Kirim Verifikasi via SMS</Text>
          </FancyButton>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <IconFactory
            type="FontAwesome5"
            name="user-alt"
            style={[styles.icon]}
          />
          <Spacer width={10} />
          <Text style={styles.title}>Daftar</Text>
        </View>
        <Spacer height={10} />
        <View style={styles.inputContainer}>
          <Text style={styles.labelCenter}>
            Kode OTP sudah dikirim melalui SMS ke ponsel-mu. Masukkan kode OTP :
          </Text>
          <Input value={code} onChangeText={(text: string) => setCode(text)} />
          <Spacer height={10} />
          <FancyButton
            containerStyle={styles.button}
            onPress={async (): Promise<void> => {
              // await signInWithPhoneNumber('+62' + phoneNumber);
              toPrevPage();
            }}>
            <Image
              style={styles.mailIcon}
              source={require('@assets/icons/mail.png')}
            />
            <Spacer width={8} />
            <Text style={styles.buttonText}>Kirim Ulang Verifikasi</Text>
          </FancyButton>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignInScreen;
