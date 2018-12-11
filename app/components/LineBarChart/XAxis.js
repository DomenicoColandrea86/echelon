import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightGrey } from 'utils/colors';

const Line = styled.line`
  fill: none;
  stroke: ${lightGrey};
  shape-rendering: crispEdges;
  transform: translate(0, 0);
`;

const XAxis = ({ ticks = [], margin, width, height }) => (
  <>
    <Line
      className="axis axis--x"
      x1={margin.left}
      x2={width}
      y1={height}
      y2={height}
    />
    <g className="axis-labels">{ticks}</g>
  </>
);

XAxis.propTypes = {
  ticks: PropTypes.array.isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default XAxis;
