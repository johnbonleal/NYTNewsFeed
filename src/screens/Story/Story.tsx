import React from 'react';
import { View } from 'react-native';
import get from 'lodash/get';
import moment from 'moment';
import HeaderImage from '../../containers/HeaderImage/HeaderImage';
import Article from '../../containers/Article/Article';
import styles from './styles';

const Story: React.SFC = ({route}) => {
  const {item} = route.params;
  const title = get(item, 'title');
  const author = get(item, 'byline', 'By --');
  const publishedDate = moment(get(item, 'published_date')).fromNow();
  const content = get(item, 'abstract');
  return (
    <View style={styles.container}>
      <HeaderImage />
      <Article title={title} author={author} content={content} date={publishedDate} />
    </View>
  );
};

export default Story;
