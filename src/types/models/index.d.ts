import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { ORDER_STATUS, ROLES } from './enum';
import { UserAddress } from './subtypes';

export interface User extends FirebaseFirestoreTypes.DocumentData {
  uid: string;
  name?: string;
  phoneNumber?: string;
  address?: UserAddress;
}

export interface Secret extends FirebaseFirestoreTypes.DocumentData {
  role: ROLES;
  points: number;
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
  customerPaymentCredential: string;
  status: ORDER_STATUS;
  totalCost: number;
  createdAt: firebase.firestore.Timestamp;
  completedAt: string;
  shipping: {
    origin: {
      name: string;
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

export interface Districts extends FirebaseFirestoreTypes.DocumentData {
  value: Array<string>;
}

export * from './enum';
export * from './subtypes';
