import { actionTypes } from "./actions";
const initialState = {
  storyIds: [],
  stories: [],
  page: 1,
  isFetching: false,
  error: ""
};

//Get a Initial State from reducer
const getInitialState = () => initialState;

const story = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case `${actionTypes.FETCH_STORY_IDS_REQUEST}`:
    case `${actionTypes.FETCH_STORIES_REQUEST}`:
      return {
        ...state,
        isFetching: true
      };
    case `${actionTypes.FETCH_STORY_IDS_SUCCESS}`:
      return {
        ...state,
        ...payload
      };
    case `${actionTypes.FETCH_STORIES_SUCCESS}`:
      return {
        ...state,
        stories: [...state.stories, ...payload.stories],
        page: state.page + 1,
        isFetching: false
      };
    default:
      return state;
  }
};

export default story;
