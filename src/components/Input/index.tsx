import React from 'react';
import Regular from './regular';
import { KeyboardTypeOptions, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  value: string;
  onChangeText?: (text: string) => void;
  type?: 'regular' | 'OTP';
  placeHolder?: string;
  keyboardType?: KeyboardTypeOptions;
}

const Input: React.FC<Props> = props => {
  switch (props.type) {
    case 'regular':
      return <Regular {...props} />;
    default:
      return <Regular {...props} />;
  }
};

export default Input;
