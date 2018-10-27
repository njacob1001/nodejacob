import React from 'react';
import SearchBar from './search_bar';

const BlogBar = () => (
  <div className="Bbar-wrapper">
    <div className="Bbar-container">
      <ul className="Bbar-items">
        <li className="Bbar-item">
          <span>All</span>
        </li>
        <li className="Bbar-item">
          <span>JavaScript</span>
        </li>
        <li className="Bbar-item">
          <span>CSS</span>
        </li>
        <li className="Bbar-item">
          <span>HTML</span>
        </li>
        <li className="Bbar-item">
          <span>Unity</span>
        </li>
      </ul>
      <SearchBar />
    </div>
  </div>
);

export default BlogBar;
