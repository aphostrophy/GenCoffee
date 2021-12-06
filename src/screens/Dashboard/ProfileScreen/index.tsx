import React from 'react';
import { Text, View } from 'react-native';

import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import { Container, MemberCard, DashedLine, Spacer, FancyButton } from '@components';
import { useSignOut } from '@hooks';
import { ProfileStackParamList, AppTabParamList } from '@types';
import { GRAY } from '@styles/colors';
import { styles } from './styles';

type NavigationProps = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, 'Profile'>,
  BottomTabScreenProps<AppTabParamList>
>;

const ProfileScreen = ({ navigation }: NavigationProps): JSX.Element => {
  const { onSignOut } = useSignOut();
  return (
    <Container statusBarStyle="dark-content" containerStyle={styles.container}>
      <MemberCard />
      <Spacer height={25} />
      <DashedLine dashGap={5} dashLength={8} dashThickness={1.5} dashColor={GRAY} />
      <Spacer height={25} />
      <Text style={styles.header}>Kecamatan</Text>
      <Text style={styles.text}>Cidadap</Text>
      <Spacer height={25} />
      <Text style={styles.header}>Alamat Lengkap</Text>
      <Text style={styles.text}> Jl. Ganesha No.10, Dago, Bandung</Text>
      <Spacer height={25} />
      <Text style={styles.header}>No. Handphone</Text>
      <Text style={styles.text}>08123456781</Text>
      <Spacer height={50} />
      <View style={styles.buttonsContainer}>
        <FancyButton
          onPress={async () => navigation.navigate('EditProfile')}
          containerStyle={styles.editProfileButton}
        >
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </FancyButton>
        <Spacer height={15} />
        <FancyButton onPress={() => onSignOut()} containerStyle={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </FancyButton>
      </View>
    </Container>
  );
};

export default ProfileScreen;
