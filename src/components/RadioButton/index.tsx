import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Spacer } from '@components';
import { YELLOW } from '@styles/colors';

type keyValue = {
  key: string;
  text: string;
};

type Props = {
  options: Array<keyValue>;
};

type State = {
  selectedKey: null | string;
};

export default class RadioButton extends Component<Props, State> {
  state = {
    selectedKey: null,
  };

  render() {
    const { options } = this.props;
    const { selectedKey } = this.state;

    return (
      <View>
        {options.map(res => {
          return (
            <View key={res.key} style={styles.container}>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                  this.setState({
                    selectedKey: res.key,
                  });
                }}
              >
                {selectedKey === res.key && <View style={styles.selectedRb} />}
              </TouchableOpacity>
              <Spacer width={10} />
              <Text style={styles.radioText}>{res.text}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 35,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    color: '#000',
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 7,
    height: 7,
    borderRadius: 50,
    backgroundColor: 'green',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
});
