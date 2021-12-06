import React from 'react';
import { FlatList } from 'react-native';
import { Container, Header } from '@components';
import { StackScreenProps } from '@react-navigation/stack';

import { AppStackParamList } from '@types';
import { WHITE } from '@styles/colors';
import { styles } from './styles';

type NavigationProps = StackScreenProps<AppStackParamList, 'AppTab'>;

const ChooseDistrictScreen = ({ navigation }: NavigationProps): JSX.Element => {
  return (
    <Container containerStyle={styles.container}>
      <Header
        title="Pilih Kecamatan"
        onBack={() => navigation.goBack()}
        color={WHITE}
        containerStyle={styles.header}
      />
      {/* <FlatList /> */}
    </Container>
  );
};

export default ChooseDistrictScreen;
