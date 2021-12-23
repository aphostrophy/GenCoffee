import React from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { Container, Header } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { changeShop } from '@slices/ShopSlice';
import { AppStackParamList } from '@types';
import { WHITE } from '@styles/colors';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '@hooks';

type NavigationProps = StackScreenProps<AppStackParamList, 'ChooseStore'>;

const ChooseStoreScreen = ({ navigation }: NavigationProps): JSX.Element => {
  const stores = useAppSelector(state => state.useShop.storelist);
  const dispatch = useAppDispatch();

  const _handleChooseStore = (district: string) => {
    dispatch(changeShop(district));
    navigation.goBack();
  };

  return (
    <Container containerStyle={styles.container}>
      <Header
        title="Pilih Toko"
        onBack={() => navigation.goBack()}
        color={WHITE}
        containerStyle={styles.header}
      />
      <View style={styles.listWrapper}>
        <FlatList
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.row} onPress={() => _handleChooseStore(item.district)}>
              <Text style={styles.district}>{item.district}</Text>
            </TouchableOpacity>
          )}
          data={stores}
        />
      </View>
    </Container>
  );
};

export default ChooseStoreScreen;
