import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import AppNavigator from './navigators/AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const NYTApp: React.FC = () => (
  <View style={styles.container}>
    <AppNavigator />
  </View>
);

export default NYTApp;
