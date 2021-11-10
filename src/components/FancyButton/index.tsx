import React from 'react';
import {ActivityIndicator, StyleProp, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useToggle} from '@hooks';

import styles from './styles';

interface FancyButtonProps {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => Promise<void>;
}

const FancyButton: React.FC<FancyButtonProps> = ({
  children,
  containerStyle,
  onPress,
}) => {
  const [isLoading, toggleLoading] = useToggle(false);

  function handlePress() {
    toggleLoading();
    onPress().then(() => {
      toggleLoading();
    });
  }

  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[styles.row, containerStyle]}
      onPress={() => handlePress()}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child);
          }
        })
      )}
    </TouchableOpacity>
  );
};

export default FancyButton;
