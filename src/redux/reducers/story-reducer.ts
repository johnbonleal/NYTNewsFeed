import { FetchStoryTypes, SelectedSectionType } from '../actions/story-action';

const INITIAL_STATE = {
  isLoading: false,
  hasError: false,
  selectedSection: 'World',
  data: {},
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
        data: {
          ...state.data,
          [payload.section]: payload.data,
        },
      };
    case FetchStoryTypes.FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case SelectedSectionType:
      return {
        ...state,
        selectedSection: payload,
      }
    default:
      return state;
  }
};
