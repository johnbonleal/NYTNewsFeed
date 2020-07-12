import React from 'react';
import { View, Text, ScrollView, AppState } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { ButtonGroup } from '../../components';
import { FetchStoryActions, SelectedSectionAction } from '../../redux/actions/story-action';
import { getSelectedSection } from '../../redux/selectors/story-selector';
import { getNetworkConnectivity } from '../../redux/selectors/network-selector';
import { data1, data2 } from './data';
import styles from './styles';

const Section: React.FC = ({ fetchStories, updateSelectedSection, selectedSection, isConnected }) => {
  const [section, setSelectedSection] = React.useState(selectedSection);
  React.useEffect(() => {
    if (isConnected) fetchStories(section);
    updateSelectedSection(section);
  }, [section]);
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
            itemSelected={section}
            onItemSelected={handleSelectedCategory}
          />
          <ButtonGroup
            data={data2}
            itemSelected={section}
            onItemSelected={handleSelectedCategory}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state: AppState) => ({
  selectedSection: getSelectedSection(state),
  isConnected: getNetworkConnectivity(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  fetchStories: (params: string) => dispatch(FetchStoryActions.requestFetchStory(params)),
  updateSelectedSection: (params: string) =>
    dispatch(SelectedSectionAction.setSelectedSection(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Section);
