import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Display.css';

function Display({ total, next, operation }) {
  return (
    <div className="main-screen">
      <span className="screen">
        {total}
        {next}
        {operation}
      </span>
    </div>
  );
}

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

Display.defaultProps = {
  total: '0',
};

export default Display;
