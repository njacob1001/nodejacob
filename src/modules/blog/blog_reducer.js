const initialState = {
  search: '',
  posts: []
};

export default function blog(state = initialState, action) {
  switch (action.type) {
    case 'NEW_SEARCH': {
      return {
        ...state,
        search: action.search
      };
    }
    case 'FETCH_POSTS_SUCCESS': {
      return {
        ...state,
        posts: action.payload
      };
    }
    default:
      return state;
  }
}
