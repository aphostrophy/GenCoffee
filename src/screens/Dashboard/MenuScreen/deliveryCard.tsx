import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { MenuStackParamList, AppTabParamList, AppStackParamList } from '@types';

import { Spacer } from '@components';
import { limitString } from '@utils/text';
import { deliveryCardStyles as styles } from './styles';

type NavigationProps = CompositeScreenProps<
  StackScreenProps<MenuStackParamList, 'Menu'>,
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList>,
    StackScreenProps<AppStackParamList, 'AppTab'>
  >
>;

interface DeliveryCardProps {
  fullAddress: string | null;
  district: string | null;
  onChangePress: () => void;
}
interface MiniCardProps {
  fullAddress: string | null;
  district: string | null;
  onChangePress: () => void;
}

const DeliveryCard = ({ fullAddress, district, onChangePress }: DeliveryCardProps): JSX.Element => {
  return (
    <LinearGradient colors={['#458FFF', '#AACCFF']} style={styles.container}>
      <View style={[styles.row, styles.topSection]}>
        <Image source={require('@assets/icons/motorcycle.png')} style={styles.icon} />
        <Spacer width={10} />
        <Text style={styles.title}>Diantar</Text>
        <Spacer width={10} />
        {/* <Text style={styles.subtitle}>{`ganti ke 'Ambil Sendiri'`}</Text> */}
      </View>
      <Spacer height={15} />
      <View style={styles.bottomSection}>
        <MiniCard fullAddress={fullAddress} district={district} onChangePress={onChangePress} />
      </View>
    </LinearGradient>
  );
};

const MiniCard = ({ fullAddress, district, onChangePress }: MiniCardProps): JSX.Element => {
  return (
    <View style={styles.miniCardContainer}>
      <View style={[styles.row, styles.miniCardTop]}>
        <Text style={styles.miniCardTopTitle}>Diantar ke</Text>
      </View>
      <View style={[styles.row, styles.miniCardBottom]}>
        <View style={styles.column}>
          {fullAddress && district ? (
            <>
              <Text style={styles.miniCardBottomLabel}>{limitString(fullAddress, 18)}</Text>
              <Text style={styles.miniCardBottomSmallLabel}>{district}</Text>
            </>
          ) : (
            <Text style={styles.miniCardRedLabel}>Belum dipasang</Text>
          )}
        </View>
        <TouchableOpacity style={styles.miniCardBottomButton} onPress={() => onChangePress()}>
          <Text style={styles.miniCardBottomButtonText}>Ganti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { DeliveryCard };
