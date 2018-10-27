import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MinimalHeader from '../common/ui/minimal-header';
import MinimalFooter from '../common/ui/minimal-footer';
import AsyncComponent from './../common/utils/asyncComponent';
//import Post from './../modules/post/components/index';
import store from './../common/configureStore';
import module from './module';

const register = module(store);

const Work = () => import(/* webpackChunkName: "work" */ './../modules/work');
const About = () => import(/* webpackChunkName: "about" */ './../modules/about');
const Blog = () => register('blog', import(/* webpackChunkName: "blog" */'./../modules/blog'));
const Post = () => import(/* webpackChunkName: "post" */ './../modules/post');


const App = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <MinimalHeader />
          <Switch>
            <Route path="/" exact component={() => <AsyncComponent moduleProvider={Work} />} />
            <Route path="/about" component={() => <AsyncComponent moduleProvider={About} />} />
            <Route path="/blogs" component={() => <AsyncComponent moduleProvider={Blog} />} />
            <Route path="/:id" component={({match}) => <AsyncComponent match={match} moduleProvider={Post} />} />
          </Switch>
        <MinimalFooter />
      </React.Fragment>
    </Router>
  </Provider>
);

export default App;
