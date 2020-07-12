import { action } from 'typesafe-actions';
import createRequestTypes from './action-types';

export const FetchStoryTypes = createRequestTypes('FETCH_STORY');
export const SelectedSectionType = 'SET_SELECTED_SECTION';

export const FetchStoryActions = {
  requestFetchStory: (params: object) => action(FetchStoryTypes.REQUEST, params),
  successFetchStory: (data: object) => action(FetchStoryTypes.SUCCESS, data),
  failureFetchStory: (error: string) => action(FetchStoryTypes.FAILURE, error),
};

export const SelectedSectionAction = {
  setSelectedSection: (payload: string) => action(SelectedSectionType, payload),
};
