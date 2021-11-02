import React from 'react';
import Regular from './regular';

const Input = props => {
  switch (props.type) {
    case 'regular':
      return <Regular {...props} />;
    default:
      return <Regular {...props} />;
  }
};

export default Input;
