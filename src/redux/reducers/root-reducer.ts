import { combineReducers } from 'redux';

import StoryReducer from './story-reducer';

const AppReducer = combineReducers({
  stories: StoryReducer,
});

export default AppReducer;
