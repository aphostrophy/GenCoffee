import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Spacer, DashedLine, Header, Container } from '@components';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { useAppSelector } from '@hooks/hooks';
import { selectNormalizedCartItems, selectTotalCartPrice } from '@selectors/cart';
import { ProfileStateLoaded } from '@slices/ProfileSlice';
import { PlacesDBContext, OrderDBContext } from '@api';
import { formatRupiah } from '@utils';
import { MenuStackParamList, AppTabParamList, AppStackParamList } from '@types';
import { WHITE, GRAY } from '@styles/colors';
import { CheckoutModal } from './CheckoutModal';
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
  const userToken = useAppSelector(state => state.useAuth.userToken as string);
  const memoizedSelectNormalizedCartItems = useMemo(() => selectNormalizedCartItems, []);
  const memoizedSelectTotalCartPrice = useMemo(() => selectTotalCartPrice, []);
  const cartItems = useAppSelector(memoizedSelectNormalizedCartItems);
  const totalCartCost = useAppSelector(memoizedSelectTotalCartPrice);
  const [deliveryCost, setDeliveryCost] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [gopayNumber, setGopayNumber] = useState<string>('');

  const handleSubmit = async () => {
    try {
      if (user.district === null || user.fullAddress === null) {
        throw new Error('Pemesanan tidak bisa diproses');
      }
      const now = new Date();
      const body = {
        createdAt: now,
        customerId: userToken,
        customerPaymentCredential: gopayNumber,
        products: cartItems.map(item => {
          return {
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            options: item.options,
            price: item.price,
          };
        }),
        shipping: {
          address: {
            city: 'Bandung',
            district: user.district,
            streetAddress: user.fullAddress,
            addressNote: user.addressNote,
          },
          origin: {
            name: 'Toko Lengkong',
          },
          deliveryPrice: deliveryCost,
        },
        totalCost: totalCost,
      };
      await OrderDBContext.current.createOrder(body);
      setIsVisible(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  useEffect(() => {
    (async () => {
      if (user.district) {
        const priceData = await PlacesDBContext.current.getDeliveryPrice('Lengkong', user.district);
        if (priceData.length > 0) {
          setDeliveryCost(parseInt(priceData[0].data().price));
          setTotalCost(parseInt(priceData[0].data().price) + totalCartCost);
        }
      }
    })();
  }, [totalCartCost, user.district]);

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
            ListFooterComponent={
              <CartFooter
                deliveryCost={deliveryCost}
                totalCost={totalCost}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                gopayNumber={gopayNumber}
                setGopayNumber={setGopayNumber}
                handleSubmit={handleSubmit}
              />
            }
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
  isVisible,
  setIsVisible,
  gopayNumber,
  setGopayNumber,
  handleSubmit,
}: {
  deliveryCost: number;
  totalCost: number;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  gopayNumber: string;
  setGopayNumber: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => Promise<void>;
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
        <TouchableOpacity
          style={[styles.column, styles.checkout]}
          onPress={() => setIsVisible(true)}
        >
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
        <Spacer width={20} />
      </View>
      <CheckoutModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        gopayNumber={gopayNumber}
        setGopayNumber={setGopayNumber}
        handleSubmit={() => handleSubmit()}
      />
    </View>
  );
};

export default CartScreen;
