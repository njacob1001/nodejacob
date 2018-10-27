import express from 'express';
//import cors from 'cors';
import mongoose from 'mongoose';
import Post from './models/post';
import serverRender from './server_render';

const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
const puerto = process.env.PORT || 3000;
const app = express();
//app.use(cors());
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// Add headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

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

app.post('/api/post', (req, res) => {
  const {
    title,
    author,
    path,
    resume,
    img,
    date,
    tags,
    category
  } = req.body;
  const post = new Post({
    title,
    author,
    path,
    resume,
    img,
    date,
    tags,
    category
  });

  post.save((err, postDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      post: postDB
    });
  });
});

app.get('/api/blogs', (req, res) => {
  const desde = req.query.start || 0;
  const hasta = req.query.end || 3;
  //para filtrar datos agregamos 'atributo atributo atributo'
  //asi Post.find({}, 'title img author')
  Post.find({})
    .skip(Number(desde))
    .limit(Number(hasta))
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }
      Post.countDocuments({}, (err, conteo) => {
        res.json({
          ok: true,
          total: conteo,
          blogs
        });
      });
    });
});

app.use(serverRender());

mongoose.connect('mongodb://jacob:jacobgonzalez373222@ds143163.mlab.com:43163/jacob', { useNewUrlParser: true }, (err, res) => {
  if (err) throw err;

  console.log('Base de datos ONLINE');
});

app.listen(puerto, () => {
  console.log(`Server is listening on port: ${puerto} `);
});
