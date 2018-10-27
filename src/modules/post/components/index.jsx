import React from 'react';

const Post = ({ match }) => {
  console.log('olovotgo');
  return (<h1>Hey hey {match.params.id}</h1>);
};

export default Post;
