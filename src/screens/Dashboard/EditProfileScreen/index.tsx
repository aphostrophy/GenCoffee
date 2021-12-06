import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { Container, Header, Input, Spacer, FancyButton } from '@components';
import { ProfileStackParamList, AppTabParamList, AppStackParamList } from '@types';
import { styles } from './styles';

type NavigationProps = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, 'Profile'>,
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList>,
    StackScreenProps<AppStackParamList, 'AppTab'>
  >
>;

const EditProfileScreen = ({ navigation }: NavigationProps): JSX.Element => {
  const [name, setName] = useState<string>('John Doe');
  const [district, setDistrict] = useState<string>('Cidadap');
  const [address, setAddress] = useState<string>('Jl. Ganesha No.10, Dago, Bandung');
  const [addressNote, setAddressNote] = useState<string>('');

  return (
    <Container containerStyle={styles.container} statusBarStyle="dark-content">
      <Header title="Ubah Profil" onBack={navigation.goBack} />
      <Spacer height={25} />
      <View style={styles.innerContainer}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <Input value={name} onChangeText={text => setName(text)} />
        <Spacer height={20} />
        <Text style={styles.label}>Kecamatan</Text>
        <View style={styles.row}>
          <Text style={styles.district}>{district}</Text>
          <Spacer width={20} />
          <TouchableOpacity
            style={styles.districtButton}
            onPress={() => navigation.navigate('ChooseDistrict')}
          >
            <Text style={styles.districtButtonText}>{'Ganti Kecamatan >'}</Text>
          </TouchableOpacity>
        </View>
        <Spacer height={20} />
        <Text style={styles.label}>Alamat Lengkap</Text>
        <Input value={address} onChangeText={text => setAddress(text)} type="note" limit={100} />
        <Spacer height={20} />
        <Text style={styles.label}>Keterangan Alamat</Text>
        <Input
          value={addressNote}
          onChangeText={text => setAddressNote(text)}
          type="note"
          limit={150}
        />
        <Text style={styles.hint}>Cth. Rumah cat hijau, pagar hitam, dll.</Text>
        <Spacer height={30} />
        <FancyButton containerStyle={styles.submitButton}>
          <Text style={styles.submitText}>Simpan Perubahan</Text>
        </FancyButton>
      </View>
    </Container>
  );
};

export default EditProfileScreen;
