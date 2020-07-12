import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './navigators/AppNavigator';
import configureStore from './redux/store';

const { store, persistor } = configureStore();

const NYTApp: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);

export default NYTApp;
