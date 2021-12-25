import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import Clipboard from '@react-native-community/clipboard';
import { IconFactory, Input, Spacer, NonNativeFancyButton } from '@components';
import { modalStyles as styles } from './styles';

interface CheckoutModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  gopayNumber: string;
  setGopayNumber: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => Promise<void>;
}

const CheckoutModal = ({
  isVisible,
  setIsVisible,
  gopayNumber,
  setGopayNumber,
  handleSubmit,
}: CheckoutModalProps): JSX.Element => {
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  const closeModal = () => {
    setErrorVisible(false);
    setIsVisible(false);
  };

  const validateAndSubmit = async () => {
    if (gopayNumber.length > 0) {
      await handleSubmit();
    } else {
      setErrorVisible(true);
    }
  };
  return (
    <Modal
      isVisible={isVisible}
      useNativeDriver={true}
      onBackdropPress={closeModal}
      style={styles.modal}
    >
      <View style={styles.modalBody}>
        <TouchableOpacity onPress={() => closeModal()}>
          <IconFactory type="AntDesign" name="close" style={styles.closeIcon} />
        </TouchableOpacity>
        <Spacer height={40} />
        <View style={styles.section}>
          <View style={styles.hintContainer}>
            <Text style={styles.hint}>
              Pembayaran dilakukan dengan melakukan transfer ke akun Gopay Gen Coffee yang kemudian
              akan divalidasi oleh staff Gen Coffee
            </Text>
          </View>
        </View>
        <Spacer height={20} />
        <View style={styles.section}>
          <Text style={styles.genCoffee}>Gen Coffee</Text>
          <Spacer height={4} />
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString('GP081234567891');
              Toast.show({
                type: 'info',
                text1: 'message copied to clipboard',
              });
            }}
            style={styles.row}
          >
            <Text style={styles.genCoffeeNumber}>GOPAY : GP081234567891</Text>
            <Spacer width={10} />
            <IconFactory type="Feather" name="copy" style={styles.copyIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString('777222271712');
            }}
            style={styles.row}
          >
            <Text style={styles.genCoffeeNumber}>BCA : 777222271712</Text>
            <Spacer width={10} />
            <IconFactory type="Feather" name="copy" style={styles.copyIcon} />
          </TouchableOpacity>
        </View>
        <Spacer height={20} />
        <View style={styles.section}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>No. Akun Pembayaran Anda</Text>
            <Text style={styles.labelHint}>contoh BCA561xxxxxxxxx atau GOPAY081xxxxxxxxx</Text>

            <Text style={[styles.errorLabel, errorVisible ? styles.visible : styles.invisible]}>
              Nomor tidak boleh kosong
            </Text>
            <Input
              value={gopayNumber}
              onChangeText={val => setGopayNumber(val)}
              containerStyle={{ width: '100%', height: 30 }}
            />
          </View>
        </View>
        <Spacer height={20} />
        <View style={styles.section}>
          <NonNativeFancyButton containerStyle={styles.submit} onPress={validateAndSubmit}>
            <Text style={styles.submitText}>Lakukan Pembayaran</Text>
          </NonNativeFancyButton>
        </View>
        <Spacer height={20} />
        <Toast position="bottom" bottomOffset={20} />
      </View>
    </Modal>
  );
};

export { CheckoutModal };
