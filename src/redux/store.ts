import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { createNetworkMiddleware } from 'react-native-offline';
import RootReducer from './reducers/root-reducer';
import RootSaga from './sagas/root-saga';
import { reactotron } from '../configs/reactotron-config';

export type AppState = ReturnType<typeof RootReducer>;

export default () => {
  const middlewares = [];
  const enhancers = [];
  let sagaMonitor = null;

  if (__DEV__) {
    sagaMonitor = reactotron.createSagaMonitor();
    enhancers.push(reactotron.createEnhancer());
  }

  const networkMiddleware = createNetworkMiddleware({
    queueReleaseThrottle: 200,
  });
  middlewares.push(networkMiddleware);

  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middlewares.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middlewares));

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['modal'],
    timeout: null,
    stateReconciler: autoMergeLevel1,
  };
  const persistedReducer = persistReducer(persistConfig, RootReducer);
  const store = compose(...enhancers)(createStore)(persistedReducer);
  const persistor = persistStore(store);

  sagaMiddleware.run(RootSaga);

  return { store, persistor };
};
