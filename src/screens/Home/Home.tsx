import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Section from '../../containers/Section/Section';
import List from '../../containers/List/List';
import { AppState } from '../../redux/store';
import { getStoryBySection } from '../../redux/selectors/story-selector';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Home = ({articles}) => {
  return (
    <View style={styles.container}>
      <Section />
      <List data={articles} />
    </View>
  );
}

const mapStateToProps = (state: AppState) => ({
  articles: getStoryBySection(state),
});

export default connect(mapStateToProps)(Home);
