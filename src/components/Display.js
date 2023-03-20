import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Display.css';

function Display({ total, next, operation }) {
  return (
    <div className="main-screen">
      <span className="screen">{total}</span>
      <span className="screen">{operation}</span>
      <span className="screen">{next}</span>
    </div>
  );
}

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
  next: '',
  operation: '',
};

export default Display;
