import React from 'react';
import PropTypes from 'prop-types';

const Line = ({ source = [], generator, color }) => (
  <path d={generator(source)} stroke={color} />
);

Line.propTypes = {
  source: PropTypes.array.isRequired,
  generator: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Line;
