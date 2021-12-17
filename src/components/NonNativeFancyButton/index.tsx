import React, { useEffect } from 'react';
import { ActivityIndicator, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { Observable, Subscription } from 'rxjs';
import { useToggle } from '@hooks';

import styles from './styles';

interface NonNativeFancyButtonProps {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => Promise<void>;
}

const NonNativeFancyButton = ({
  children,
  containerStyle,
  onPress,
}: NonNativeFancyButtonProps): JSX.Element => {
  let subscription: Subscription | null = null;
  const [isLoading, toggleLoading] = useToggle(false);

  function handlePress() {
    toggleLoading();
    const observable = new Observable<boolean>(subscriber => {
      onPress()
        .then(() => {
          subscriber.next(true);
          subscriber.complete();
        })
        .catch((err: unknown) => {
          subscriber.error(err);
        });
    });
    subscription = observable.subscribe({
      next: (value: boolean) => {
        if (value) {
          toggleLoading();
        }
      },
      error: err => {
        if (err instanceof Error) {
          console.log(`Error at fancy button observable ${err.message}`);
        }
      },
    });
  }

  useEffect(() => {
    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [subscription]);

  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[styles.row, containerStyle]}
      onPress={() => handlePress()}
    >
      {isLoading ? (
        <ActivityIndicator color="#FFFFFF" />
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

export default NonNativeFancyButton;
