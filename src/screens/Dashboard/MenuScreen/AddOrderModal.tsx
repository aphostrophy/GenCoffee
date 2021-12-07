import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { useAppDispatch, useAppSelector } from '@hooks';
import { DashedLine, IconFactory, Spacer, RadioButton } from '@components';
import { addProductToCart, reduceProductQuantityFromCart } from '@slices/CartSlice';
import { selectCartItemQuantity } from '@selectors';
import { Product } from '@types';
import { camelToSentenceCase } from '@utils';
import { GRAY } from '@styles/colors';
import { modalStyles as styles } from './styles';

interface AddOrderModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product | null;
}

const AddOrderModal = ({ isVisible, setIsVisible, product }: AddOrderModalProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(state => selectCartItemQuantity(state, product?.id));
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  const closeModal = () => {
    setIsVisible(false);
    setCount(0);
  };

  const submitChangesToCart = () => {
    if (product && count > 0) {
      dispatch(
        addProductToCart({
          id: product.id,
          name: product.name,
          quantity: count,
          imagePath: product.imagePath,
        }),
      );
    }
    closeModal();
  };

  return (
    <Modal
      isVisible={isVisible}
      useNativeDriver={true}
      style={styles.modal}
      onBackdropPress={() => closeModal()}
    >
      {product ? (
        <View style={styles.modalBody}>
          <TouchableOpacity onPress={() => closeModal()}>
            <IconFactory type="AntDesign" name="close" style={styles.closeIcon} />
          </TouchableOpacity>
          <View style={styles.row}>
            <Image source={{ uri: product.imagePath }} style={styles.image} />
            <Spacer width={20} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.description}>{product.description}</Text>
            </View>
          </View>
          <Spacer height={15} />
          <DashedLine dashGap={5} dashLength={8} dashThickness={1.5} dashColor={GRAY} />
          <Spacer height={15} />
          <View style={styles.alignCenter}>
            <Text style={styles.headerLabel}>Jumlah</Text>

            <View style={styles.row}>
              <TouchableOpacity
                onPress={() =>
                  setCount(count => {
                    if (count > 0) {
                      return count - 1;
                    }
                    return count;
                  })
                }
              >
                <IconFactory type="Entypo" name="circle-with-minus" style={styles.plusMinusIcon} />
              </TouchableOpacity>
              <Spacer width={15} />
              <View style={styles.numberContainer}>
                <Text>{count}</Text>
              </View>
              <Spacer width={15} />
              <TouchableOpacity onPress={() => setCount(count => count + 1)}>
                <IconFactory type="Entypo" name="circle-with-plus" style={styles.plusMinusIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <OrderOptions options={product.options} />
          <Spacer height={15} />
          <View style={styles.alignCenter}>
            <TouchableOpacity style={styles.button} onPress={submitChangesToCart}>
              <View style={styles.textContainer}>
                <Text style={styles.buttonText}>Tambah ke Keranjang</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Spacer height={15} />
        </View>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </Modal>
  );
};

const OrderOptions = ({ options }: { options: Record<string, Array<string>> }): JSX.Element => (
  <>
    {Object.keys(options).map(key => (
      <View key={key}>
        <Spacer height={15} />
        <DashedLine dashGap={5} dashLength={8} dashThickness={1.5} dashColor={GRAY} />
        <Spacer height={15} />
        <View style={styles.alignCenter}>
          <Text style={styles.headerLabel}>{camelToSentenceCase(key)}</Text>
          <Spacer height={5} />
          <RadioButton options={options[key]} />
        </View>
      </View>
    ))}
  </>
);

export { AddOrderModal };
