// Api
import blogApi from './api';

// Action Types
import { FETCH_POSTS } from './action_types';

export const fetchPosts = (fetchingFrom, query) => dispatch => {
  const requestPosts = () => ({
    type: FETCH_POSTS.request()
  });
  const receivedPosts = posts => ({
    type: FETCH_POSTS.success(),
    payload: posts.blogs
  });

  dispatch(requestPosts());

  return blogApi.getAllPosts(query, fetchingFrom)
    .then(posts => dispatch(receivedPosts(posts)));
};
