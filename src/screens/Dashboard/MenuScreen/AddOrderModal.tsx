import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { View, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { useAppSelector } from '@hooks';
import { DashedLine, IconFactory, Spacer, RadioButton } from '@components';
import { Product } from '@types';
import { GRAY } from '@styles/colors';
import { modalStyles as styles } from './styles';

const options = [
  {
    key: 'BIASA',
    text: 'Biasa',
  },
  {
    key: 'KURANGI',
    text: 'Kurangi',
  },
  {
    key: 'BANYAK',
    text: 'Banyak',
  },
];

interface AddOrderModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product | null;
}

const AddOrderModal = ({ isVisible, setIsVisible, product }: AddOrderModalProps): JSX.Element => {
  return (
    <Modal
      isVisible={isVisible}
      useNativeDriver={true}
      style={styles.modal}
      onBackdropPress={() => setIsVisible(false)}
    >
      {product ? (
        <View style={styles.modalBody}>
          <TouchableOpacity onPress={() => setIsVisible(false)}>
            <IconFactory type="AntDesign" name="close" style={styles.closeIcon} />
          </TouchableOpacity>
          <View style={styles.row}>
            <Image source={{ uri: product.imagePath }} style={styles.image} />
            <Spacer width={20} />
            <View>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.description}>{product.description}</Text>
            </View>
          </View>
          <Spacer height={15} />
          <DashedLine dashLength={5} dashColor={GRAY} />
          <Spacer height={15} />
          <RadioButton options={options} />
        </View>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </Modal>
  );
};

export { AddOrderModal };
