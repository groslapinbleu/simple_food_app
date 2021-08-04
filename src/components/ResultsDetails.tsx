import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import IResult from '../interfaces/IResult';

interface ResultsDetailProps {
  result: IResult;
}
const ResultsDetails = ({ result }: ResultsDetailProps) => {
  return (
    <View style={styles.details}>
      <Image
        style={styles.tinyImage}
        source={{
          uri: result.image_url,
        }}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        Rating {result.rating} Stars, {result.review_count} Reviews
      </Text>
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
  details: {
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResultsDetails;
