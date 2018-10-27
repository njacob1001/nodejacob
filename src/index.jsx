import React from 'react';
import { hydrate } from 'react-dom';
import App from './modules/app';
import './style.scss';

//Importar archivos adiconales
import '!file-loader?name=[name].[ext]&outputPath=./assets/img/!./assets/img/og-image.jpg'; //eslint-disable-line

hydrate(<App />, document.getElementById('root'));

//ENABLE THIS SCRIPT ON PRODUCTION MODE
(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
})();
