import { combineReducers } from 'redux';
import {reducer as network} from 'react-native-offline';

import StoryReducer from './story-reducer';

const AppReducer = combineReducers({
  stories: StoryReducer,
  network,
});

export default AppReducer;
