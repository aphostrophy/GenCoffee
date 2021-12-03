import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

import { useAppSelector, useAppDispatch, useFirebaseDataSource } from '@hooks';
import { changeCategory, restartProductsBatch } from '@slices/ShopSlice';
import { Container, Spacer, ProductCard } from '@components';
import { MenuStackParamList, AppTabParamList, Product } from '@types';

import { QuerySection } from './QuerySection';
import { DeliveryCard } from './DeliveryCard';
import { AddOrderModal } from './AddOrderModal';

type Props = CompositeScreenProps<
  StackScreenProps<MenuStackParamList, 'Menu'>,
  BottomTabScreenProps<AppTabParamList>
>;

const MenuScreen = (): JSX.Element => {
  const { category, items } = useAppSelector(state => state.useShop);
  const dispatch = useAppDispatch();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [product, setProduct] = useState<null | Product>(null);

  const fetchProduct = useCallback(() => {
    if (category === 'all') {
      return firestore().collection('product').get();
    } else {
      return firestore().collection('product').where('category', '==', category).get();
    }
  }, [category]);

  const onOrderButtonClick = (index: number) => {
    console.log(items[index]);
    setProduct(items[index]);
    setIsVisible(true);
  };

  const products = useFirebaseDataSource<Product>(fetchProduct);

  useEffect(() => {
    if (products) {
      dispatch(restartProductsBatch(products));
    }
  }, [products, dispatch]);

  return (
    <Container statusBarStyle="dark-content" containerStyle={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <ProductCard product={item} index={index} onOrderButtonClick={onOrderButtonClick} />
        )}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <View style={styles.deliveryCardWrapper}>
              <DeliveryCard />
            </View>
            <Spacer height={20} />
            <View style={styles.querySectionWrapper}>
              <QuerySection
                category={category}
                setCategory={category => {
                  dispatch(changeCategory(category));
                }}
              />
            </View>
          </View>
        )}
        numColumns={2}
        ListHeaderComponentStyle={styles.listHeader}
        contentContainerStyle={styles.listContent}
        extraData={products}
      />
      <AddOrderModal isVisible={isVisible} setIsVisible={setIsVisible} product={product} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  listHeader: {
    zIndex: 10,
  },
  listContent: {
    zIndex: 0,
    minHeight: '100%',
  },
  headerContainer: {
    zIndex: 10,
  },
  deliveryCardWrapper: {
    flex: 3,
  },
  querySectionWrapper: {
    minHeight: 100,
  },
  menuSectionWrapper: {
    flex: 1,
    backgroundColor: 'purple',
  },
});

export default MenuScreen;
