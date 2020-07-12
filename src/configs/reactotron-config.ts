import Reactotron from 'reactotron-react-native';
import tronsauce from 'reactotron-apisauce';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import AppConfig from './app-config';

let reactotron;
if (AppConfig.debug.useReactotron) {
  reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: 'NYTNewsFeed',
      host: '192.168.1.9',
    })
    .useReactNative({
      editor: true,
      networking: {
        ignoreUrls: /google\.com/, // Ignore the connection PINGs from react-native-offline, this works
      },
      overlay: false,
    })
    .use(tronsauce())
    .use(reduxPlugin())
    .use(sagaPlugin({except: ['checkInternetAccessSaga']}))
    .connect();

  reactotron.clear();

  console.tron = Reactotron.log;
}

export {reactotron};
