import React from 'react';

/**
 * @author      Nandani.V.Patel
 * @date        08th Dec 2024
 * @description Implement UI loader
 * @param       display for laoder
 * @response     
 **/

const Loader = () => (
  <div
    className="spinner-border text-primary"
    style={{
      position: 'absolute',
      top: '40%',
      left: '45%',
      width: '5rem',
      height: '5rem',
    }}
    role="status"
  >
    <span className="visually-hidden">Loading...</span>
  </div>
);

export default Loader;
