import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import get from 'lodash/get';
import moment from 'moment';
import { Divider, Dropdown, ListEmpty } from '../../components';
import Thumbnail from './Thumbnail/Thumbnail';
import styles from './styles';

const List: React.SFC = ({ data }) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    const title = get(item, 'title');
    const author = get(item, 'byline', 'By --');
    const publishedDate = moment(get(item, 'published_date')).fromNow();
    const onPress = () => navigation.navigate('Story', {item});
    return <Thumbnail onPress={onPress} title={title} author={author} date={publishedDate} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Dropdown title="LOCATION" />
        <Divider />
        <Dropdown title="KEYWORDS" />
      </View>
      <View style={{ flex: 8 }}>
        <FlatList
          keyExtractor={(item, index) => `${item.section}-${index}`}
          data={data}
          contentContainerStyle={styles.contentContainer}
          ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
          ListEmptyComponent={() => <ListEmpty />}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default List;
