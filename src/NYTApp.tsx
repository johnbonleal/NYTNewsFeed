import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import Section from './containers/Section/Section';
import List from './containers/List/List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const NYTApp: React.FC = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
    <Section />
    <List />
  </View>
);

export default NYTApp;
