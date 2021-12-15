import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CartScreenProductData } from '@slices/CartSlice';
import { productCardStyles as styles } from './styles';
import { Spacer, IconFactory } from '@components';
import { limitString, formatRupiah, optionsToText } from '@utils';

interface ProductCardProps {
  item: CartScreenProductData;
}

const ProductCard = ({ item }: ProductCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={[styles.column, { flex: 1 }]}>
        <Image source={{ uri: item.imagePath }} style={styles.image} />
      </View>
      <Spacer width={10} />
      <View style={[styles.column, { flex: 2 }]}>
        <Text style={styles.name}>{limitString(item.name, 17)}</Text>
        <Text style={styles.price}>{formatRupiah(15000)}</Text>
        <Text style={styles.options}>{optionsToText(item.options)}</Text>
      </View>
      <Spacer width={10} />
      <View style={[styles.column, { flex: 1 }]}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => console.log(`RED`, item)}>
            <IconFactory type="Entypo" name="circle-with-minus" style={styles.plusMinusIcon} />
          </TouchableOpacity>
          <Spacer width={5} />
          <View style={styles.numberContainer}>
            <Text>{item.quantity}</Text>
          </View>
          <Spacer width={5} />
          <TouchableOpacity onPress={() => console.log(`ADD`, item)}>
            <IconFactory type="Entypo" name="circle-with-plus" style={styles.plusMinusIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export { ProductCard };
