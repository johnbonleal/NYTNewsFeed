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
      // Some sections from response are inconsistent so we have to fix this
      const sectionSave = data.section === 'World News' ? 'World' : data.section;
      yield put(FetchStoryActions.successFetchStory({ section: sectionSave, data: data.results }));
      return;
    }
    yield put(FetchStoryActions.failureFetchStory('Error'));
  } catch (error) {
    yield put(FetchStoryActions.failureFetchStory('Error'));
  }
}

export default [takeLatest(FetchStoryTypes.REQUEST, fetchStories)];
