import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack'; // marche avec react navigation V4
import yelp from '../api/yelp';
import IResult from '../interfaces/IResult';

interface ResultsShowScreenProps {
  navigation: NavigationStackProp<{ id: string }>;
}

const ResultsShowScreen = ({ navigation }: ResultsShowScreenProps) => {
  const [result, setResult] = useState<IResult | null>(null);
  const id = navigation.getParam('id');
  const getResult = async (id: string) => {
    const res = await yelp.get(`/${id}`);
    setResult(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      await getResult(id); // do a call to yelp at startup
    }
    anyNameFunction();
  }, []);

  return (
    <View>
      {result ? (
        <View>
          <Text>{result.name}</Text>
          <FlatList
            keyExtractor={(item) => item}
            data={result.photos}
            renderItem={(element) => {
              return (
                <Image
                  style={styles.tinyImage}
                  source={{
                    uri: element.item,
                  }}
                />
              );
            }}
          ></FlatList>
        </View>
      ) : (
        <Text>loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tinyImage: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
});
export default ResultsShowScreen;
