import React from 'react';
import { View } from 'react-native';
import HeaderImage from '../../containers/HeaderImage/HeaderImage';
import Article from '../../containers/Article/Article';
import styles from './styles';

const Story = () => {
  return (
    <View style={styles.container}>
      <HeaderImage />
      <Article />
    </View>
  );
};

export default Story;
