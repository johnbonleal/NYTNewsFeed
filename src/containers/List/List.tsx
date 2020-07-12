import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import get from 'lodash/get';
import { Divider, Dropdown } from '../../components';
import Thumbnail from './Thumbnail/Thumbnail';
import styles from './styles';

const List: React.SFC = ({data}) => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    const title = get(item, 'title');
    const author = get(item, 'byline');
    const onPress = () => navigation.navigate('Story', {item});
    return <Thumbnail onPress={onPress} title={title} author={author} />;
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
          contentContainerStyle={{ flexGrow: 1, padding: 16 }}
          ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default List;
