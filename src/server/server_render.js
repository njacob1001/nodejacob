import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import serialize from 'serialize-javascript';
import configureStore from './../common/configureStoreServer';
import App from '../modules/appServer';
import Html from './template';
import routes from '../common/serverRoutes';

export default function serverRender() {
  return (req, res, next) => {
    const store = configureStore();

    const promises = routes.reduce((acc, route) => {
      if (matchPath(req.url, route)
        && route.component
        && route.component.initialAction) {
        acc.push(Promise.resolve(store.dispatch(route.component.initialAction('server'))));
      }
      return acc;
    }, []);
    Promise.all(promises)
      .then(() => {
        const context = {};
        const initialState = store.getState();
        const markup = renderToString(
          <HelmetProvider context={context}>
            <Provider store={store}>
              <StaticRouter location={req.url} context={context}>
                <App />
              </StaticRouter>
            </Provider>
          </HelmetProvider>
        );

        if (context.url) {
          res.redirect(301, context.url);
        } else {
          res.send(Html(markup, serialize(initialState)));
        }
      }).catch(e => {
        console.log('Error en promesa', e);
      });
  };
}
