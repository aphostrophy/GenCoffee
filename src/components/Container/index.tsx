import React from 'react';
import { StyleSheet, Keyboard, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { WHITE } from '@styles/colors';

interface ContainerProps {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  onTouchStart?: () => void;
}

const Container: React.FC<ContainerProps> = ({ children, containerStyle, onTouchStart }) => {
  return (
    <SafeAreaView
      style={[styles.container, containerStyle]}
      onTouchStart={() => {
        onTouchStart && onTouchStart();
        Keyboard.dismiss();
      }}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});

export { Container };
