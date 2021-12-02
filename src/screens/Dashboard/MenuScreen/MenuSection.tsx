import React from 'react';
import { View, FlatList, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { ProductCard } from '@components';
import { Product } from '@types';
import { useFirebaseDataSource } from '@hooks';
import { menuSectionStyles as styles } from './styles';

const MenuSection = (): JSX.Element => {
  const products = useFirebaseDataSource<Product>(() => firestore().collection('product').get());
  return (
    <View style={styles.container}>
      {console.log(products)}
      <Text>A</Text>
      {/* <FlatList numColumns={2} /> */}
    </View>
  );
};

export { MenuSection };
