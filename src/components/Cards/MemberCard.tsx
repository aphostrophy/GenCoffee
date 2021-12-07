import React from 'react';
import { View, Image, Text } from 'react-native';
import { Spacer } from '@components';
import { memberCardStyles as styles } from './styles';

interface MemberCardProps {
  name: string;
  points: number;
}

const MemberCard = ({ name, points }: MemberCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>Member Card</Text>
      </View>
      <Spacer height={15} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.points}>{points} Pts</Text>
      </View>
      <Image source={require('@assets/icons/member.png')} style={styles.member} />
    </View>
  );
};

export { MemberCard };
