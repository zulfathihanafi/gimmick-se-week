// TriangleComponent.js
import React from 'react';

const TriangleComponent = ({ isVisible }) => (
  <div
    className="triangle"
    style={{
      display: isVisible ? 'block' : 'none',
      animation: isVisible ? 'riseUp 2s ease-out' : 'none',
    }}
  />
);

export default TriangleComponent;