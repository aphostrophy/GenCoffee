import React from 'react';
import { Text, View } from 'react-native';

import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { Container } from '@components';
import { ProfileStackParamList, AppTabParamList } from '@types';

type Props = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, 'Profile'>,
  BottomTabScreenProps<AppTabParamList>
>;

const ProfileScreen: React.FC = () => {
  return (
    <Container statusBarStyle="dark-content">
      <View>
        <Text>Profile</Text>
      </View>
    </Container>
  );
};

export default ProfileScreen;
