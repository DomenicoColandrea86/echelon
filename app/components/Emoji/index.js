import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ label, symbol }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label || ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
);

Emoji.propTypes = {
  label: PropTypes.any,
  symbol: PropTypes.any,
};
export default Emoji;
