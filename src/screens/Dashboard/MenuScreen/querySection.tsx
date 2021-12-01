import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Spacer } from '@components';
import { querySectionStyles as styles } from './styles';

interface QuerySectionProps {
  category: string;
  setCategory: (category: string) => void;
}

type Placeholder = {
  all: string;
  coffee: string;
  food: string;
};

type PlaceholderIndex = {
  [key: string]: string;
};

const placeholder: Placeholder & PlaceholderIndex = {
  all: 'Semua',
  coffee: 'Kopi',
  food: 'Makanan',
};

const QuerySection = ({ category, setCategory }: QuerySectionProps): JSX.Element => {
  const [pickerOpen, setPickerOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>(category);
  const [items] = useState([
    {
      label: 'Semua',
      value: 'all',
    },
    {
      label: 'Kopi',
      value: 'coffee',
    },
    {
      label: 'Makanan',
      value: 'food',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={[styles.column, { flex: 2 }]}>
        <Text style={styles.headerText}>Kategori</Text>
        <DropDownPicker
          open={pickerOpen}
          items={items}
          value={selectedItem}
          setOpen={setPickerOpen}
          setValue={setSelectedItem}
          onChangeValue={value => {
            if (typeof value === 'string') {
              setCategory(value);
            }
          }}
          placeholder={placeholder[category]}
          style={styles.picker}
          itemSeparatorStyle={styles.line}
          itemSeparator={true}
          dropDownContainerStyle={styles.dropDownContainerStyle}
        />
      </View>
      <Spacer width={20} />
      <View style={[styles.column, { flex: 3 }]}>
        <Text style={styles.headerText}>Pencarian</Text>
      </View>
    </View>
  );
};

export { QuerySection };
