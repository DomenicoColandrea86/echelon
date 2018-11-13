import React from 'react';
import PropTypes from 'prop-types';

const Line = ({ source = [], generator }) => {
  console.log('this is source ', source);
  return <path d={generator(source)} />;
}

Line.propTypes = {
  source: PropTypes.array.isRequired,
  generator: PropTypes.func.isRequired,
};

export default Line;
