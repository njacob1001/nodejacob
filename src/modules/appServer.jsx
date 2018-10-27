import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MinimalHeader from '../common/ui/minimal-header';
import MinimalFooter from '../common/ui/minimal-footer';

import routes from './../common/serverRoutes';

const App = () => (
  <React.Fragment>
    <MinimalHeader />
      <Switch>
        {routes.map(route => <Route {...route} />)}
      </Switch>
    <MinimalFooter />
  </React.Fragment>
);

export default App;
