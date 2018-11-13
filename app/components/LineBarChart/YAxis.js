import React from 'react';
import PropTypes from 'prop-types';

const YAxis = ({ ticks = [], margin, height }) => (
  <>
    <line className="axis" x1={margin} x2={margin} y1={margin} y2={height} />
    <g className="axis-labels">{ticks}</g>
  </>
);

YAxis.propTypes = {
  ticks: PropTypes.array.isRequired,
  margin: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default YAxis;
