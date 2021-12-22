import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { OrderDBContext } from '@api';
import { Container, Spacer } from '@components';
import { useAppDispatch, useAppSelector, useFirebaseDataSource, useToggle } from '@hooks';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackParamList, AppTabParamList, OrderHistory, OrderStackParamList } from '@types';
import { OrderMainStyle } from './styles';

import { OrderOngoingCard } from './OngoingOrderCard';

type NavigationProps = CompositeScreenProps<
  StackScreenProps<OrderStackParamList, 'Order'>,
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList>,
    StackScreenProps<AppStackParamList, 'AppTab'>
  >
>;

const OrderScreen = ({ navigation }: NavigationProps): JSX.Element => {
  const userToken = useAppSelector(state => state.useAuth.userToken as string);
  const [trigger, toggleTrigger] = useToggle(false);
  const [refresh, setRefresh] = useState(false);
  const dispatch = useAppDispatch();

  const fetchOngoingOrder = useCallback(() => {
    return OrderDBContext.current.getOngoingOrder(userToken, trigger);
  }, [userToken, trigger]);

  const items = useFirebaseDataSource<OrderHistory>(fetchOngoingOrder);

  return (
    <Container statusBarStyle="dark-content">
      <View>
        <FlatList
          data={items}
          renderItem={({ item, index }) => (
            <OrderOngoingCard
              orderOngoingData={item}
              key={`${index}-${item.customerPaymentCredential}`}
              navigation={navigation}
            />
          )}
          ListHeaderComponent={
            <>
              <View style={OrderMainStyle.navigation}>
                <Text style={[OrderMainStyle.textNavigation, OrderMainStyle.textNavgationActive]}>
                  Berlangsung
                </Text>

                <Text style={[OrderMainStyle.textNavigation]}>Lampau</Text>
              </View>
              <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginBottom: 10 }}>
                Sedang Berlangsung
              </Text>
            </>
          }
          ListFooterComponent={<Spacer height={40} />}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          extraData={items}
          refreshing={refresh}
          onRefresh={() => {
            toggleTrigger();
            setRefresh(false);
          }}
        />
      </View>
    </Container>
  );
};

export default OrderScreen;
