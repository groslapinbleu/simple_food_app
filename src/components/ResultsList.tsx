import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import IResult from '../interfaces/IResult';
import ResultsDetails from './ResultsDetails';
import { withNavigation } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

interface ResultsListProps {
  navigation?: NavigationStackProp<{}>;
  title: string;
  results: IResult[];
}

const ResultsList = ({ navigation, title, results }: ResultsListProps) => {
  return (
    <View style={styles.resultsList}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{results.length} result(s)</Text>
      <FlatList
        horizontal={true}
        keyExtractor={(item) => item.id}
        data={results}
        renderItem={(element) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ResultsShow')}
            >
              <ResultsDetails result={element.item} />
            </TouchableOpacity>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  resultsList: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '300',
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default withNavigation(ResultsList);
