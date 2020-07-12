import { action } from 'typesafe-actions';
import createRequestTypes from './action-types';

export const FetchStoryTypes = createRequestTypes('FETCH_STORY');

export const FetchStoryActions = {
  requestFetchDeals: (params: object) => action(FetchStoryTypes.REQUEST, params),
  successFetchDeals: (data: object) => action(FetchStoryTypes.SUCCESS, data),
  failureFetchDeals: (error: string) => action(FetchStoryTypes.FAILURE, error),
};
