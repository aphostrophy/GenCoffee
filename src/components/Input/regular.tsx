import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  TextProps,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {GRAY} from '@styles/colors';

const {width} = Dimensions.get('window');

interface Props extends TextProps {
  value: string;
  onChangeText: (text: string) => void;
  placeHolder?: string;
}

const Regular: React.FC<Props> = ({
  value,
  onChangeText,
  placeHolder,
  ...otherProps
}) => {
  const textInputRef = useRef<TextInput>(null);
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
        {...otherProps}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: width * 0.1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 8,
    marginVertical: width * 0.02,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    textAlign: 'center',
    fontSize: RFValue(16),
  },
  placeholder: {
    fontSize: RFValue(14),
    position: 'absolute',
    textAlign: 'center',
    alignSelf: 'center',
    color: 'black',
  },
});

export default Regular;
