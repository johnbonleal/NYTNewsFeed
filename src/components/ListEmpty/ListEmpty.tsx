import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ListEmpty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Data Found.</Text>
    </View>
  );
};

export default ListEmpty;
