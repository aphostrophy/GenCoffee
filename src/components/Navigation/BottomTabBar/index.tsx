import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import styles from './styles';
import IconFactory, {IconTypes} from '@components/IconFactory';

const BottomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.row}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={label + index.toString()}
            style={styles.container}>
            <BottomTabIcon routeName={route.name} isFocused={isFocused} />
            <Text
              style={isFocused ? styles.activeButton : styles.inactiveButton}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

interface BottomTabIconProps {
  routeName: string;
  isFocused: boolean;
}

const BottomTabIcon: React.FC<BottomTabIconProps> = ({
  routeName,
  isFocused,
}: BottomTabIconProps) => {
  switch (routeName) {
    case 'ProfileStack':
      return (
        <View style={styles.column}>
          <View style={styles.iconContainer}>
            <IconFactory
              type={IconTypes.fontAwesome5}
              name="user-alt"
              style={isFocused ? styles.activeIcon : styles.inactiveIcon}
            />
          </View>
        </View>
      );
    case 'MenuStack':
      return (
        <View style={[styles.column, styles.middleIcon]}>
          <View style={styles.iconContainer}>
            <IconFactory
              type={IconTypes.materialCommunityIcons}
              name="food-fork-drink"
              style={[isFocused ? styles.activeIcon : styles.inactiveIcon]}
            />
          </View>
        </View>
      );
    case 'OrderStack':
      return (
        <View style={styles.column}>
          <View style={styles.iconContainer}>
            <IconFactory
              type={IconTypes.fontAwesome5}
              name="box"
              style={isFocused ? styles.activeIcon : styles.inactiveIcon}
            />
          </View>
        </View>
      );
  }
  return null;
};

export default BottomTabBar;
