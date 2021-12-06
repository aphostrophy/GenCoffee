import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  App: undefined;
  Auth: undefined;
};

export type AuthStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
};

export type AppTabParamList = {
  MenuStack: NavigatorScreenParams<MenuStackParamList>;
  OrderStack: NavigatorScreenParams<OrderStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};

export type MenuStackParamList = {
  Menu: undefined;
};

export type OrderStackParamList = {
  Order: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
};
