import React from 'react';
import PropTypes from 'prop-types';

const XAxis = ({ ticks = [], margin, width, height }) => (
  <>
    <line className="axis" x1={margin} x2={width} y1={height} y2={height} />
    <g className="axis-labels">{ticks}</g>
  </>
);

XAxis.propTypes = {
  ticks: PropTypes.array.isRequired,
  margin: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default XAxis;
