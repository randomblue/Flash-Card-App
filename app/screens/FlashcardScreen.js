import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import FlashcardPage from '../containers/FlashcardContainer';

export default class FlashcardScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <FlashcardPage />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});