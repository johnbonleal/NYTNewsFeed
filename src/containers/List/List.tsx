import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider, Dropdown } from '../../components';
import Thumbnail from './Thumbnail/Thumbnail';
import styles from './styles';

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const List: React.SFC = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    const onPress = () => navigation.navigate('Story', {item});
    return <Thumbnail onPress={onPress} />;
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
          keyExtractor={(item) => item.id.toString()}
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
