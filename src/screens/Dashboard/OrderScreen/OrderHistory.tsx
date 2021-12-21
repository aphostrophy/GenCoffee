import React, { useCallback, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';

import { OrderDBContext } from '@api';
import { Container, Spacer } from '@components';
import { useAppDispatch, useAppSelector, useFirebaseDataSource } from '@hooks';
import { OrderHistory } from '@types';
import { OrderHistoryCard } from './HistoryOrderCard';
import { restartItemsBatch } from '@slices/OrderOngoingSlice';

const OrderHistoryScreen = (): JSX.Element => {
  const userToken = useAppSelector(state => state.useAuth.userToken as string);
  const dispatch = useAppDispatch();

  const fetchOngoingOrder = useCallback(() => {
    return OrderDBContext.current.getHistoryOrder(userToken);
  }, [userToken]);

  const items = useFirebaseDataSource<OrderHistory>(fetchOngoingOrder);

  //   useEffect(() => {
  //     if (items) {
  //       dispatch(restartItemsBatch(items));
  //     }
  //   }, [items, dispatch]);

  return (
    <Container statusBarStyle="dark-content">
      <View>
        <View>
          <FlatList
            data={items}
            renderItem={({ item, index }) => (
              <OrderHistoryCard
                orderHistoryData={item}
                key={`${index}-${item.customerPaymentCredential}`}
              />
            )}
            ListHeaderComponent={
              <>
                <Text
                  style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginBottom: 10 }}
                >
                  Lampau
                </Text>
              </>
            }
            ListFooterComponent={<Spacer height={40} />}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            extraData={items}
            refreshing={true}
          />
        </View>
      </View>
    </Container>
  );
};

export default OrderHistoryScreen;
