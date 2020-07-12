import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { ButtonGroup } from '../../components';
import { FetchStoryActions } from '../../redux/actions/story-action';
import { data1, data2 } from './data';
import styles from './styles';

const Section: React.FC = ({ fetchStories }) => {
  const [selectedSection, setSelectedSection] = React.useState('World');
  React.useEffect(() => {
    fetchStories(selectedSection);
  }, [selectedSection]);
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

const mapDispatchToProps = (dispatch) => ({
  fetchStories: (params: string) => dispatch(FetchStoryActions.requestFetchDeals(params)),
});

export default connect(null, mapDispatchToProps)(Section);
