import React, { useCallback } from 'react';
import {
  StyleSheet,
  Keyboard,
  StyleProp,
  ViewStyle,
  StatusBar,
  StatusBarStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { WHITE } from '@styles/colors';
import { useFocusEffect } from '@react-navigation/core';

interface ContainerProps {
  children: React.ReactNode;
  statusBarStyle?: StatusBarStyle;
  containerStyle?: StyleProp<ViewStyle>;
  onTouchStart?: () => void;
}

const Container: React.FC<ContainerProps> = ({
  children,
  statusBarStyle = 'default',
  containerStyle,
  onTouchStart,
}) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(statusBarStyle, true);
    }, [statusBarStyle]),
  );

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
