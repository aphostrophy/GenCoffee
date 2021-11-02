import React, {useState, useRef} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';

const Regular = ({value, onChangeText, placeHolder, keyboardType}) => {
  const textInputRef = useRef(null);
  const [renderer, setRenderer] = useState(0);
  return (
    <View style={styles.container}>
      {textInputRef &&
        textInputRef.current &&
        value.length === 0 &&
        !textInputRef.current.isFocused() && (
          <Text style={styles.placeholder}>{placeHolder}</Text>
        )}
      {renderer === 0 && <Text style={styles.placeholder}>{placeHolder}</Text>}
      <TextInput
        ref={textInputRef}
        value={value}
        onChangeText={val => onChangeText(val)}
        onFocus={() => {
          setRenderer(cur => cur + 1);
        }}
        onBlur={() => {
          setRenderer(cur => cur + 1);
        }}
        keyboardType={keyboardType}
        style={[{color: 'black'}, styles.input]}
      />
    </View>
  );
};

Regular.defaultProps = {
  keyboardType: 'default',
};

export default Regular;
