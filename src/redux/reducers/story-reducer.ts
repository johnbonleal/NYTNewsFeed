import { FetchStoryTypes } from '../actions/story-action';

const INITIAL_STATE = {
  isLoading: false,
  hasError: false,
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FetchStoryTypes.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FetchStoryTypes.SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        data: [...state.data, payload],
      };
    case FetchStoryTypes.FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
};
