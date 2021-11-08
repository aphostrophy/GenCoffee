import React from 'react';
import Regular from './regular';
import {KeyboardTypeOptions, ViewProps} from 'react-native';

interface Props extends ViewProps {
  value: string;
  onChangeText: (text: string) => void;
  type?: string;
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
