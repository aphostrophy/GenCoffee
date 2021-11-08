import React from 'react';
import {View, Text, Image} from 'react-native';

import {Input, IconFactory, Spacer, FancyButton} from '@components';
import styles from './styles';

interface BoardTwoProps {
  toPrevPage?: () => void;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  confirmCode: (code: string) => Promise<void>;
}

const BoardTwo: React.FC<BoardTwoProps> = ({
  toPrevPage,
  code,
  setCode,
  confirmCode,
}) => {
  return (
    <View style={styles.container}>
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
            if (toPrevPage) {
              toPrevPage();
            }
          }}>
          <Image
            style={styles.mailIcon}
            source={require('@assets/icons/mail.png')}
          />
          <Spacer width={8} />
          <Text style={styles.buttonText}>Kirim Ulang Verifikasi</Text>
        </FancyButton>
      </View>
    </View>
  );
};

export {BoardTwo};
