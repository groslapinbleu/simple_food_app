import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface SearchBarProps {
  text: string;
  setText(text: string): void;
  setTextSubmitted(submitted: boolean): void;
}
const SearchBar = ({ text, setText, setTextSubmitted }: SearchBarProps) => {
  //const [text, setText] = useState('');
  return (
    <View style={styles.searchBar}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => {
          setText(text);
          setTextSubmitted(false);
        }}
        value={text}
        placeholder='Search'
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={() => setTextSubmitted(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: 5,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 5,
  },
});

export default SearchBar;
