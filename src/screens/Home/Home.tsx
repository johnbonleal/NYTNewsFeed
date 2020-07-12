import React from 'react';
import { View, StyleSheet } from 'react-native';
import Section from '../../containers/Section/Section';
import List from '../../containers/List/List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Home = () => (
  <View style={styles.container}>
    <Section />
    <List />
  </View>
);

export default Home;
