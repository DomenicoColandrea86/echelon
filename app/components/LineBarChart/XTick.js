import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { charcoal } from 'utils/colors';

const Text = styled.text`
  fill: ${charcoal};
  fill-opacity: 0.9;
  font-size: 14px;
  text-anchor: start;
`;

const XTick = ({ datum, margin, size, scale, format }) => (
  <g
    className="tick"
    transform={`translate(${scale(datum)},${size + margin.left / 1.5})`}
  >
    <Text>{format(datum)}</Text>
  </g>
);

XTick.propTypes = {
  datum: PropTypes.instanceOf(Date).isRequired,
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

export default XTick;
