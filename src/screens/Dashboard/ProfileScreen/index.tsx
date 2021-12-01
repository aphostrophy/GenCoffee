import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { Container } from '@components';
import { useSignOut } from '@hooks';
import { ProfileStackParamList, AppTabParamList } from '@types';

type Props = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, 'Profile'>,
  BottomTabScreenProps<AppTabParamList>
>;

const ProfileScreen: React.FC = () => {
  const { onSignOut } = useSignOut();
  return (
    <Container statusBarStyle="dark-content">
      <View>
        <Text>Profile</Text>
      </View>
      <TouchableOpacity onPress={() => onSignOut()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default ProfileScreen;
