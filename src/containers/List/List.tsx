import React from 'react';
import { View, StyleSheet, FlatList, Image, Dimensions, Text } from 'react-native';
import { Divider, Dropdown } from '../../components';
import image from '../../resources/images';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: 'cyan',
  },
  dropdownContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'deepskyblue',
  },
});

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const Thumbnail = () => (
  <View
    style={{
      backgroundColor: 'white',
      height: height / 5,
      width: '100%',
      borderRadius: 8,
      flexDirection: 'row',
      padding: 16,
    }}>
    <View style={{ flex: 1 }}>
      <Image source={image.placeholder} style={{ flex: 1, height: undefined, width: undefined }} />
    </View>
    <View
      style={{
        flex: 2,
        justifyContent: 'space-around',
        marginLeft: 16,
      }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Lorem Ipsum dolor sit amet, consectetur
      </Text>
      <Text>By: Reporter XYZ</Text>
      <Text>Published: 10 minutes ago</Text>
    </View>
  </View>
);

const List = () => {
  const renderItem = ({item}) => {
    return <Thumbnail />;
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
