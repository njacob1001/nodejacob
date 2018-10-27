import WorkPage from './../modules/work/components/index';
import AboutPage from './../modules/about/components/index';
import BlogPage from './../modules/blog/components/index';

const Sroutes = [
  {
    path: '/',
    exact: true,
    component: WorkPage,
    key: 'workroute'
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
    key: 'aboutrute'
  },
  {
    path: '/blogs',
    exact: true,
    component: BlogPage,
    key: 'blogroute'
  }
];

export default Sroutes;
