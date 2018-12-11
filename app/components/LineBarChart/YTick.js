import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { charcoal, lightGrey } from 'utils/colors';

const Line = styled.line`
  fill: none;
  stroke: ${lightGrey};
  shape-rendering: crispEdges;
  transform: translate(0, 0);
`;

const Text = styled.text`
  fill: ${charcoal};
  fill-opacity: 0.9;
  font-size: 14px;
  text-anchor: middle;
`;

const YTick = ({ datum, margin, size, scale, format }) => (
  <g className="tick" transform={`translate(${margin.left},${scale(datum)})`}>
    <Text x={-20} y={5}>
      {format(datum)}
    </Text>
    <Line
      x1="0"
      x2={size - margin.left}
      y1="0"
      y2="0"
      transform="translate(0, 0)"
    />
  </g>
);

YTick.propTypes = {
  datum: PropTypes.number.isRequired,
  scale: PropTypes.func.isRequired,
  format: PropTypes.func.isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }).isRequired,
  size: PropTypes.number.isRequired,
};

export default YTick;
