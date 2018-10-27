// Dependencies
import { combineReducers } from 'redux';

// Shared Reducers
//import device from './deviceReducer';
import blog from './../../modules/blog/blog_reducer';

const rootReducer = combineReducers({
  blog
});

export default rootReducer;
