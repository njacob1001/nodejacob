import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (() => {
  const store = createStore(createReducer(), composeWithDevTools(
    applyMiddleware(thunk)
  ));
  store.async = {};

  return store;
})();

/**
 *
 * @param {string} store
 * @param {string} name
 * @param {string} reducer
 * creates a new reducer on runtime of application
 * @example
 * registerReducer( store, 'aboutReducer', mod.reducer)
 * //return a store with the new reducer
 */

export function registerReducer(store, name, reducer) {
  store.async[name] = reducer;
  store.replaceReducer(createReducer(store.async));
}

function createReducer(reducers) {
  return combineReducers({
    /* Obs.:
     All non dynamic loaded reducers are declared directly here.
     If you don't have any, use the following "root" indentity reducer.
    */
    root: (state = null) => state,
    ...reducers
  });
}
