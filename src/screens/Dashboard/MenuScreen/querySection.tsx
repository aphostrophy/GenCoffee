import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { useDebouncedSearch } from '@hooks/hooks';
import { Spacer, SearchBar } from '@components';
import { PRODUCT_CATEGORY } from '@types';
import { querySectionStyles as styles } from './styles';

interface QuerySectionProps {
  category: PRODUCT_CATEGORY;
  setCategory: (category: PRODUCT_CATEGORY) => void;
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

const useSearchProduct = () => useDebouncedSearch(query => getProducts(query));
const getProducts = (query: string) => {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log('PRODUCTS SEARCHED', query);
      resolve('OK');
    }, 1),
  );
};

const QuerySection = ({ category, setCategory }: QuerySectionProps): JSX.Element => {
  const [pickerOpen, setPickerOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>(category);
  const { inputText, setInputText, searchResults } = useSearchProduct();
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
      label: 'Non Kopi',
      value: 'non-coffee',
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
            if (
              (typeof value === 'string' && value === 'coffee') ||
              value === 'all' ||
              value === 'non-coffee'
            ) {
              setCategory(value);
            }
          }}
          placeholder={placeholder[category]}
          style={styles.picker}
          itemSeparatorStyle={styles.line}
          itemSeparator={true}
          listMode="FLATLIST"
          dropDownDirection="TOP"
          dropDownContainerStyle={styles.dropDownContainerStyle}
        />
      </View>
      <Spacer width={20} />
      <View style={[styles.column, { flex: 3 }]}>
        <Text style={styles.headerText}>Pencarian</Text>
        <SearchBar value={inputText} setValue={setInputText} placeholder="Cari apapun..." />
      </View>
    </View>
  );
};

export { QuerySection };
