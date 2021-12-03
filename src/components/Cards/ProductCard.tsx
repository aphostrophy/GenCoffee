import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { IconFactory } from '@components';
import { Product } from '@types';
import { productCardStyles as styles } from './styles';

const ProductCard = ({ product }: { product: Product }): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.imagePath }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <TouchableOpacity style={styles.orderButton}>
          <IconFactory type="Entypo" name="plus" style={styles.plusIcon} />
          <Text style={styles.buttonText}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { ProductCard };
