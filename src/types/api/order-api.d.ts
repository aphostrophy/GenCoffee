import { UserAddress } from '@types/models';

export interface createOrderRequest {
  createdAt: Date;
  customerId: string;
  customerPaymentCredential: string;
  products: Array<any>;
  shipping: {
    address: UserAddress;
    origin: {
      name: string;
    };
  };
  totalCost: number;
}
