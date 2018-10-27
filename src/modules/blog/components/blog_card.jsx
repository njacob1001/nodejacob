import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ img, title, resume, tags, path }) => (
  <Link to={`/${path}`} className="Blog-card">
    <img className="Blog-ogimage" src={img} alt={title} />
    <h2 className="Blog-name">{title}</h2>
    <p className="Blog-pretext">{resume}</p>
    <div className="Blog-tags">
      {tags.map(item => <strong key={`${item}tag`}>{item}</strong>)}
    </div>
  </Link>
);

export default BlogCard;
