import React from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup } from '../../components';
import { data1, data2 } from './data';
import styles from './styles';

const Section = () => {
  const handleSelectedCategory = () => {
    console.log('Yow');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Section</Text>
      <View style={styles.container}>
        <ButtonGroup data={data1} onPress={handleSelectedCategory} />
        <ButtonGroup data={data2} onPress={handleSelectedCategory} />
      </View>
    </View>
  );
};

export default Section;
