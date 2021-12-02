import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { IconFactory } from '@components';
import { productCardStyles as styles } from './styles';

interface ProductCardProps {
  name: string;
  imagePath: string;
  description: string;
  price: number;
}

const ProductCard = ({ name, imagePath, description, price }: ProductCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imagePath }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.orderButton}>
          <IconFactory type="Entypo" name="plus" style={styles.plusIcon} />
          <Text style={styles.buttonText}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { ProductCard };
