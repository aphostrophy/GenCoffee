import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { Container, Header } from '@components';
import { StackScreenProps } from '@react-navigation/stack';

import { PlacesDBContext } from '@api';
import { AppStackParamList, Districts } from '@types';
import { WHITE } from '@styles/colors';
import { styles } from './styles';

type NavigationProps = StackScreenProps<AppStackParamList, 'AppTab'>;

const ChooseDistrictScreen = ({ navigation }: NavigationProps): JSX.Element => {
  const [districts, setDistricts] = useState<Array<string>>([]);

  useEffect(() => {
    (async () => {
      const data = await PlacesDBContext.current.getDistricts();
      if (data) {
        const districts = data.data() as Districts;
        setDistricts(districts.value);
      }
    })();
  }, []);

  return (
    <Container containerStyle={styles.container}>
      <Header
        title="Pilih Kecamatan"
        onBack={() => navigation.goBack()}
        color={WHITE}
        containerStyle={styles.header}
      />
      <View style={styles.listWrapper}>
        <FlatList
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.row} onPress={() => console.log(item)}>
              <Text style={styles.district}>{item}</Text>
            </TouchableOpacity>
          )}
          data={districts}
        />
      </View>
    </Container>
  );
};

export default ChooseDistrictScreen;
