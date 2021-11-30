import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { useSignOut } from '@hooks';
import { Container } from '@components';
import { MenuStackParamList, AppTabParamList } from '@types';

type Props = CompositeScreenProps<
  StackScreenProps<MenuStackParamList, 'Menu'>,
  BottomTabScreenProps<AppTabParamList>
>;

const MenuScreen: React.FC = () => {
  const { onSignOut } = useSignOut();
  return (
    <Container statusBarStyle="dark-content">
      <View>
        <Text>Menu</Text>
      </View>
      <TouchableOpacity onPress={() => onSignOut()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default MenuScreen;
