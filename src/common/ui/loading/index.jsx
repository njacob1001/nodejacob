import React from 'react';
//import './_loading.scss';

const LoadingIndicator = ({ mode }) => (
  <div className={`Load-container ${mode}`}>
    <div className="Load-item"></div>
    <div className="Load-item"></div>
    <div className="Load-item"></div>
    <div className="Load-item"></div>
    <div className="Load-item"></div>
    <div className="Load-item"></div>
  </div>
);

export default LoadingIndicator;
