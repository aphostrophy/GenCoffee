import React from 'react';
import { View, Text } from 'react-native';
import { Container } from '@components/Container';
import Header from '@components/Header';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { MenuStackParamList, AppTabParamList, AppStackParamList } from '@types';
import { WHITE } from '@styles/colors';
import { DeliveryCard } from './DeliveryCard';
import { styles } from './styles';
import Spacer from '@components/Spacer';

type NavigationProps = CompositeScreenProps<
  StackScreenProps<MenuStackParamList, 'Menu'>,
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList>,
    StackScreenProps<AppStackParamList, 'AppTab'>
  >
>;

const CartScreen = ({ navigation }: NavigationProps): JSX.Element => {
  return (
    <Container containerStyle={styles.container}>
      <Header
        title="Keranjang"
        onBack={navigation.goBack}
        color={WHITE}
        containerStyle={styles.header}
      />
      <View style={styles.innerContainer}>
        <Spacer height={20} />
        <DeliveryCard />
      </View>
    </Container>
  );
};

export default CartScreen;
