import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';

import {useSignOut} from '@hooks';
import {MenuStackParamList, AppTabParamList} from '@types';

type Props = CompositeScreenProps<
  StackScreenProps<MenuStackParamList, 'Menu'>,
  BottomTabScreenProps<AppTabParamList>
>;

const MenuScreen: React.FC = () => {
  const {onSignOut} = useSignOut();
  return (
    <SafeAreaView>
      <View>
        <Text>Menu</Text>
      </View>
      <TouchableOpacity onPress={() => onSignOut()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MenuScreen;
