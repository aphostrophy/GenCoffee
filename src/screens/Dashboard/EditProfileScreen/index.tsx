import React from 'react';
import { Text } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { Container, Header } from '@components';
import { ProfileStackParamList, AppTabParamList } from '@types';
import { styles } from './styles';

type NavigationProps = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, 'Profile'>,
  BottomTabScreenProps<AppTabParamList>
>;

const EditProfileScreen = ({ navigation }: NavigationProps): JSX.Element => {
  return (
    <Container containerStyle={styles.container} statusBarStyle="dark-content">
      <Header title="Edit Profile" onBack={navigation.goBack} />
    </Container>
  );
};

export default EditProfileScreen;
