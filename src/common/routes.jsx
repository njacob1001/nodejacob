// Components
import React from 'react';
import store from './configureStore';
import AsyncComponent from './utils/asyncComponent';
import module from './../modules/module';

const register = module(store);

const WorkPage = () => import(/* webpackChunkName: "examplepage" */'./../modules/work');
const AboutPage = () => import(/* webpackChunkName: "aboutpage" */'./../modules/about');
const BlogPage = () => register('blog', import(/* webpackChunkName: "aboutpage" */'./../modules/blog'));
// Containers

const routes = [
  {
    path: '/',
    exact: true,
    key: 'workroute',
    component: () => <AsyncComponent moduleProvider={WorkPage} />
  },
  {
    path: '/about',
    key: 'aboutrute',
    component: () => <AsyncComponent moduleProvider={AboutPage} />
  },
  {
    path: '/blog',
    key: 'blogroute',
    component: () => <AsyncComponent moduleProvider={BlogPage} />
  }
];

export default routes;
