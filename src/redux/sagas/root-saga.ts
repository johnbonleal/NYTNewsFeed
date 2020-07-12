import { all, fork } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';

import watcherStorySaga from './story-saga';

export default function* rootSaga() {
  yield all([...watcherStorySaga, fork(networkSaga, { pingInterval: 20000 })]);
}
