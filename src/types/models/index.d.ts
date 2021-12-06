import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { ORDER_STATUS, ROLES } from './enum';
import { UserAddress } from './subtypes';

export interface User extends FirebaseFirestoreTypes.DocumentData {
  uid: string;
  name?: string;
  points: number;
  phoneNumber?: string;
  defaultAddress?: UserAddress;
  privateUserDocument: PrivateUserDocument;
}

export interface PrivateUserDocument {
  role: ROLES;
}

export interface Product extends FirebaseFirestoreTypes.DocumentData {
  id: string;
  name: string;
  description: string;
  price: number;
  categories: Array<string>;
  availableForOrder: boolean;
  options: Record<string, Array<string>>;
  imagePath: string;
}

export interface OrderHistory {
  orderId: string;
  customerId: string;
  status: ORDER_STATUS;
  totalCost: number;
  createdAt: string;
  completedAt: string;
  shipping: {
    origin: {
      shopId: string;
      shopAddress: string;
    };
    address: {
      city: string;
      district: string;
      streetAddress: string;
      zipCode?: string;
    };
    deliveryPrice: number;
  };
  products: Array<{
    productId: string;
    productName: string;
    price: number;
    quantity: number;
  }>;
}

export interface Shop {
  shopId: string;
  createdAt: string;
  name: string;
  address: string;
  isOpen: boolean;
}

export interface PriceTable {
  shopId: string;
  district: string;
  deliveryPrice: string;
}

export * from './enum';
export * from './subtypes';
