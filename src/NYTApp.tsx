import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import Section from './containers/Section/Section';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const List = () => <View style={{ flex: 4, backgroundColor: 'aqua' }} />;

const NYTApp: React.FC = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
    <Section />
    <List />
  </View>
);

export default NYTApp;
