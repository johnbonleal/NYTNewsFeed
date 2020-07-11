import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ButtonGroup } from '../../components';
import { data1, data2 } from './data';
import styles from './styles';

const Section: React.FC = () => {
  const [selectedSection, setSelectedSection] = React.useState('World');
  const handleSelectedCategory = (item: string) => {
    setSelectedSection(item);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Section</Text>
      <ScrollView horizontal>
        <View>
          <ButtonGroup
            data={data1}
            itemSelected={selectedSection}
            onItemSelected={handleSelectedCategory}
          />
          <ButtonGroup
            data={data2}
            itemSelected={selectedSection}
            onItemSelected={handleSelectedCategory}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Section;
