import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';

import {ProfileStackParamList, AppTabParamList} from '@types';

type Props = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, 'Profile'>,
  BottomTabScreenProps<AppTabParamList>
>;

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Menu</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
