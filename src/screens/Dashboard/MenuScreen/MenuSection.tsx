import React, { useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { ProductCard } from '@components';
import { Product } from '@types';
import { useAppDispatch, useAppSelector, useFirebaseDataSource } from '@hooks';
import { restartProductsBatch } from '@slices/ShopSlice';
import { menuSectionStyles as styles } from './styles';

const MenuSection = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { items, category } = useAppSelector(state => state.useShop);

  const fetchProduct = useCallback(() => {
    if (category === 'all') {
      return firestore().collection('product').get();
    } else {
      return firestore().collection('product').where('category', '==', category).get();
    }
  }, [category]);

  const products = useFirebaseDataSource<Product>(fetchProduct);

  useEffect(() => {
    if (products) {
      dispatch(restartProductsBatch(products));
    }
  }, [products, dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={items}
        renderItem={({ item }) => <ProductCard product={item} />}
        extraData={products}
        keyExtractor={(item, index) => `${item.name}-${index}`}
      />
    </View>
  );
};

export { MenuSection };
