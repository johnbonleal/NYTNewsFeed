import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const NYTApp: React.FC = () => (
  <View style={styles.container}>
    <Text>Hello World</Text>
  </View>
);

export default NYTApp;
