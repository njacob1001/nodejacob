const express = require('express');
const app = express();
const path = require('path');

var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

app.use(express.urlencoded({ extended:false }));
app.use(express.json());

const puerto = process.env.PORT || 3000;

app.get('*.js', (req, res, next) => {
    if (req.url === '/sw.js') {
      res.setHeader('content-type', 'text/javascript');
    } else {
      req.url = `${req.url}.gz`;
      res.set('Content-Encoding', 'gzip');
      res.set('Content-Type', 'text/javascript');
    }
    next();
});


//Habilitar la carpeta public
app.use(express.static( path.resolve( __dirname, './../public' )));

app.listen(puerto, () => {
    console.log('Escuchando puerto', puerto);
})