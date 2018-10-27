import React from 'react';
//import './_section_name.scss';

const SectionName = ({ isShow, isFixed, title, text, tags }) => (
  <article
    className={`Category-container ${isShow ? 'is-show' : 'no-show'} ${isFixed ? 'is-fixed' : 'no-fixed'} `}
  >
    <h2 className="Category-title">{title}</h2>
    <p className="Category-text">{text}</p>
    <div className="Category-tags">
      {tags.map(tag => <span className="Category-item" key={tag}>{tag}</span>)}
    </div>
  </article>
);

export default SectionName;
