import { SAVE_PODCASTS } from "./actions";

export const initState = {
  podcastData: {},
  loading: false,
};

export default function bookmarksReducer(state = initState, action) {
  switch (action.type) {
    case SAVE_PODCASTS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
