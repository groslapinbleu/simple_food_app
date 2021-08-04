import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [searchApi, results, errMsg] = useResults();
  const filterResultsByPrice = (price: string) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.viewStyle}>
      <SearchBar
        text={searchTerm}
        setText={setSearchTerm}
        setTextSubmitted={(val) => {
          setSubmitted(val);
          if (val) {
            // need to check that searchApi is a function to avoid typescript error
            if (typeof searchApi === 'function') searchApi(searchTerm);
          }
        }}
      />
      {/* <Text>The Search Bar contains {searchTerm}</Text> */}
      {errMsg ? <Text>{errMsg}</Text> : null}
      <ScrollView>
        <ResultsList
          title='Cost Effective'
          results={filterResultsByPrice('$')}
        />
        <ResultsList title='Bit Pricier' results={filterResultsByPrice('$$')} />
        <ResultsList
          title='Big Spender'
          results={filterResultsByPrice('$$$')}
        />
        <ResultsList title='Top price' results={filterResultsByPrice('$$$$')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default SearchScreen;
