import React from 'react';

const ScaleIndicator = ({ value }) => (
  <div className="Indicator-container">
    <div className="Indicator-bar"></div>
    <div className="Indicator-value" style={{ width: `${value}%` }}></div>
  </div>
);

export default ScaleIndicator;
