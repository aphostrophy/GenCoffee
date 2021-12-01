import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { Container } from '@components';
import { MenuStackParamList, AppTabParamList } from '@types';

import { DeliveryCard } from './deliveryCard';

type Props = CompositeScreenProps<
  StackScreenProps<MenuStackParamList, 'Menu'>,
  BottomTabScreenProps<AppTabParamList>
>;

const MenuScreen: React.FC = () => {
  return (
    <Container statusBarStyle="dark-content" containerStyle={styles.container}>
      <View style={styles.deliveryCardWrapper}>
        <DeliveryCard />
      </View>
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
