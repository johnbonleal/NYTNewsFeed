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
    console.tron('Response: ', response);
    if (response.ok) {
      const {data} = response;
      yield put(FetchStoryActions.successFetchDeals(data.results));
    }
    yield put(FetchStoryActions.failureFetchDeals('Error'));
  } catch (error) {
    yield put(FetchStoryActions.failureFetchDeals('Error'));
  }
}

export default [takeLatest(FetchStoryTypes.REQUEST, fetchStories)];
