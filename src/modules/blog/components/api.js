// Constants
import { API } from './constants';

// Utils
import { apiFetch } from './../../../common/utils/api';

class BlogApi {
  static getAllPosts(query = {}, fetchingFrom = 'client') {
    return apiFetch(API.BLOG.POSTS, { fetchingFrom }, query);
  }
}

export default BlogApi;
