import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LineBarChart from './index';

const Path = styled.path`
  stroke-width: 2px;
  fill: none;
`;

const Line = ({ source = [], generator, color }) => (
  <Path
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
