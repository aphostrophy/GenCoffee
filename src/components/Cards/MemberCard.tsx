import React from 'react';
import { View, Image, Text } from 'react-native';
import { Spacer } from '@components';
import { memberCardStyles as styles } from './styles';

const MemberCard = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>Member Card</Text>
      </View>
      <Spacer height={15} />
      <View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.points}>2500 Pts</Text>
      </View>
      <Image source={require('@assets/icons/member.png')} style={styles.member} />
    </View>
  );
};

export { MemberCard };
