import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { useAppSelector, useAppDispatch } from '@hooks/hooks';
import { changeCategory } from '@slices/ShopSlice';
import { Container, Spacer } from '@components';
import { MenuStackParamList, AppTabParamList } from '@types';

import { QuerySection } from './querySection';
import { DeliveryCard } from './deliveryCard';

type Props = CompositeScreenProps<
  StackScreenProps<MenuStackParamList, 'Menu'>,
  BottomTabScreenProps<AppTabParamList>
>;

const MenuScreen: React.FC = () => {
  const { category, items } = useAppSelector(state => state.useShop);
  const dispatch = useAppDispatch();

  return (
    <Container statusBarStyle="dark-content" containerStyle={styles.container}>
      <View style={styles.deliveryCardWrapper}>
        <DeliveryCard />
      </View>
      <Spacer height={20} />
      <QuerySection
        category={category}
        setCategory={category => {
          dispatch(changeCategory(category));
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  deliveryCardWrapper: {
    height: 160,
  },
});

export default MenuScreen;
