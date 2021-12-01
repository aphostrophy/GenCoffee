import React from 'react';
import { Text, View } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { Container } from '@components';
import { MenuStackParamList, AppTabParamList } from '@types';

type Props = CompositeScreenProps<
  StackScreenProps<MenuStackParamList, 'Menu'>,
  BottomTabScreenProps<AppTabParamList>
>;

const MenuScreen: React.FC = () => {
  return (
    <Container statusBarStyle="dark-content">
      <View>
        <Text>Menu</Text>
      </View>
    </Container>
  );
};

export default MenuScreen;
