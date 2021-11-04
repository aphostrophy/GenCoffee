import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen} from '@screens';
import {ProfileStackParamList} from '@types';

const ProfileStack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator: React.FC = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
