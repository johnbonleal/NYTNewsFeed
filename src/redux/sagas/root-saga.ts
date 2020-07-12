import { all, fork } from 'redux-saga/effects';

import watcherStorySaga from './story-saga';

export default function* rootSaga() {
  yield all([...watcherStorySaga]);
}
