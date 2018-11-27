import React from 'react';
import PropTypes from 'prop-types';
import LineBarChart from './index';

const Line = ({ source = [], generator, color }) => (
  <path
    className={LineBarChart.selectSVGPaths}
    d={generator(source)}
    stroke={color}
  />
);

Line.propTypes = {
  source: PropTypes.array.isRequired,
  generator: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Line;
