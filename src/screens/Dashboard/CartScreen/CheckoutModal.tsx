import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Modal from 'react-native-modal';
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
          <Text style={styles.genCoffeeNumber}>GP081234567891</Text>
        </View>
        <Spacer height={20} />
        <View style={styles.section}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>No. Akun Gopay Anda</Text>
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
      </View>
    </Modal>
  );
};

export { CheckoutModal };
