import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Line = styled.line`
  fill: none;
  stroke: none;
  transform: translate(0, 0);
`;

const YAxis = ({ ticks = [], margin, height }) => (
  <g>
    <Line
      className="axis axis--y"
      x1={margin.left}
      x2={margin.left}
      y1={margin.left}
      y2={height}
    />
    <g className="axis-labels">{ticks}</g>
  </g>
);

YAxis.propTypes = {
  ticks: PropTypes.array.isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }).isRequired,
  height: PropTypes.number.isRequired,
};

export default YAxis;
