import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useSignOut} from '@hooks';

const DashboardScreen = ({navigation}) => {
  const {onSignOut} = useSignOut();
  return (
    <SafeAreaView>
      <View>
        <Text>Dashboard</Text>
      </View>
      <TouchableOpacity onPress={() => onSignOut()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DashboardScreen;
