import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Spacer, DashedLine, Header, Container } from '@components';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { useAppSelector } from '@hooks/hooks';
import { selectNormalizedCartItems, selectTotalCartPrice } from '@selectors/cart';
import { ProfileStateLoaded } from '@slices/ProfileSlice';
import { PlacesDBContext } from '@api/places';
import { formatRupiah } from '@utils';
import { MenuStackParamList, AppTabParamList, AppStackParamList } from '@types';
import { WHITE, GRAY } from '@styles/colors';
import { ProductCard } from './ProductCard';
import { DeliveryCard } from './DeliveryCard';
import { styles } from './styles';

type NavigationProps = CompositeScreenProps<
  StackScreenProps<MenuStackParamList, 'Menu'>,
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList>,
    StackScreenProps<AppStackParamList, 'AppTab'>
  >
>;

const CartScreen = ({ navigation }: NavigationProps): JSX.Element => {
  const user = useAppSelector(state => state.profile);
  const memoizedSelectNormalizedCartItems = useMemo(() => selectNormalizedCartItems, []);
  const memoizedSelectTotalCartPrice = useMemo(() => selectTotalCartPrice, []);
  const cartItems = useAppSelector(memoizedSelectNormalizedCartItems);
  const totalCost = useAppSelector(memoizedSelectTotalCartPrice);
  const [deliveryCost, setDeliveryCost] = useState<number>(0);

  useEffect(() => {
    (async () => {
      if (user.district) {
        const priceData = await PlacesDBContext.current.getDeliveryPrice('Lengkong', user.district);
        if (priceData.length > 0) {
          setDeliveryCost(priceData[0].data().price);
        }
      }
    })();
  }, [user.district]);

  return (
    <Container containerStyle={styles.container}>
      <Header
        title="Keranjang"
        onBack={navigation.goBack}
        color={WHITE}
        containerStyle={styles.header}
      />
      {user.loading === false && (
        <View style={styles.innerContainer}>
          <FlatList
            ListHeaderComponent={<CartHeader user={user} />}
            data={cartItems}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item }) => <ProductCard item={item} />}
            style={styles.list}
            ListFooterComponent={<CartFooter deliveryCost={deliveryCost} totalCost={totalCost} />}
          />
        </View>
      )}
    </Container>
  );
};

const CartHeader = ({ user }: { user: ProfileStateLoaded }): JSX.Element => {
  return (
    <View style={styles.center}>
      <Spacer height={40} />
      <DeliveryCard address={user.fullAddress} district={user.district} />
      <Spacer height={40} />
    </View>
  );
};

const CartFooter = ({
  deliveryCost,
  totalCost,
}: {
  deliveryCost: number;
  totalCost: number;
}): JSX.Element => {
  return (
    <View>
      <View style={styles.center}>
        <View style={styles.breadcrumb}>
          <Text style={styles.breadcrumbText}>Pengiriman</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Spacer width={20} />
        <View>
          <Text style={styles.costLabel}>Ongkos Kirim</Text>
          <Text style={styles.cost}>{formatRupiah(deliveryCost)}</Text>
        </View>
        <Spacer width={20} />
      </View>
      <Spacer height={20} />
      <DashedLine dashGap={5} dashLength={8} dashThickness={1.5} dashColor={GRAY} />
      <Spacer height={20} />
      <View style={styles.row}>
        <Spacer width={20} />
        <View style={[styles.column, { flex: 3 }]}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>{formatRupiah(totalCost)}</Text>
        </View>
        <TouchableOpacity style={[styles.column, styles.checkout]}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
        <Spacer width={20} />
      </View>
    </View>
  );
};

export default CartScreen;
