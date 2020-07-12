import { createSelector } from 'reselect';
import get from 'lodash/get';
import { AppState } from '../store';

export const getStorySelector = (state: AppState) => get(state, 'stories.data', {});

export const getSelectedSection = (state: AppState) => get(state, 'stories.selectedSection', '');

export const getStoryBySection = createSelector(
  [getStorySelector, getSelectedSection],
  (stories, selectedSection) => stories[selectedSection],
);
