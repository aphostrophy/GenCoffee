import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Spacer } from '@components';
import { Product } from '@types';
import { productCardStyles as styles } from './styles';

interface ProductCardProps {
  product: Product;
  index: number;
  onOrderButtonClick: (index: number) => void;
}

const ProductCard = ({ product, index, onOrderButtonClick }: ProductCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.imagePath }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <TouchableOpacity style={styles.orderButton} onPress={() => onOrderButtonClick(index)}>
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>+</Text>
            <Spacer width={4} />
            <Text style={styles.buttonText}>Order</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { ProductCard };
