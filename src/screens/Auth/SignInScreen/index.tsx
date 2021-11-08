import React, {useState, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, ScrollView, Dimensions, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {useSignIn} from '@hooks';
import {Input, IconFactory, Spacer, FancyButton} from '@components';
import {AuthStackParamList} from '@types';

import styles from './styles';

const INTERVALS = 2;
const {width: WIDTH} = Dimensions.get('window');

type Props = StackScreenProps<AuthStackParamList, 'SignIn'>;

const SignInScreen: React.FC = () => {
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
          <Input
            value={phoneNumber}
            onChangeText={(text: string): void => setPhoneNumber(text)}
            keyboardType="phone-pad"
            placeHolder="Nomor Handphone kamu"
          />
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
          <Text style={styles.title}>Daftar</Text>
        </View>
        <Input value={code} onChangeText={(text: string) => setCode(text)} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignInScreen;
