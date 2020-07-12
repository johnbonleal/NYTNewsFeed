import React from 'react';
import { View } from 'react-native';
import get from 'lodash/get';
import HeaderImage from '../../containers/HeaderImage/HeaderImage';
import Article from '../../containers/Article/Article';
import styles from './styles';

const Story = ({route}) => {
  const {item} = route.params;
  const title = get(item, 'title');
  const author = get(item, 'byline');
  const content = get(item, 'abstract');
  console.tron('Item: ', item);
  return (
    <View style={styles.container}>
      <HeaderImage />
      <Article title={title} author={author} content={content} />
    </View>
  );
};

export default Story;
