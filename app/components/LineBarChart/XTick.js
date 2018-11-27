import React from 'react';
import PropTypes from 'prop-types';

const XTick = ({ datum, margin, size, scale, format }) => (
  <g transform={`translate(${scale(datum)},${size + margin})`}>
    <text>{format(datum)}</text>
    <line x1="0" x2="0" y1="0" y2="5" transform="translate(0, -20)" />
  </g>
);

XTick.propTypes = {
  datum: PropTypes.instanceOf(Date).isRequired,
  scale: PropTypes.func.isRequired,
  format: PropTypes.func.isRequired,
  margin: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default XTick;
