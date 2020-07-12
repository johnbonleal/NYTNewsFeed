import { call, put, takeLatest } from 'redux-saga/effects';
import { FetchStoryTypes, FetchStoryActions } from '../actions/story-action';
import lowercase from 'lodash/lowerCase';
import AppConfig from '../../configs/app-config';
import API from '../../services/api';

function* fetchStories(action) {
  const { payload } = action;
  try {
    const response = yield call(API.FETCH_STORY, lowercase(payload), {
      'api-key': AppConfig.api.key,
    });

    if (response.ok) {
      const { data } = response;
      yield put(FetchStoryActions.successFetchStory({ section: data.section, data: data.results }));
      return;
    }
    yield put(FetchStoryActions.failureFetchStory('Error'));
  } catch (error) {
    yield put(FetchStoryActions.failureFetchStory('Error'));
  }
}

export default [takeLatest(FetchStoryTypes.REQUEST, fetchStories)];
