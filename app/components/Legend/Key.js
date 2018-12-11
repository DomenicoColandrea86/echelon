import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { charcoal } from '../../utils/colors';
import { headerFont } from '../../utils/fonts';

const KeyPrimitive = styled.span`
  height: 10px;
  width: 10px;
  margin-right: 0.5em;
  display: inline-block;

  ${p =>
    p.color &&
    css`
      background: ${p.color};
    `};
`;

const KeyText = styled.span`
  color: ${charcoal};
  font-family: ${headerFont};
`;

const Key = ({ color, name }) => (
  <>
    <KeyPrimitive color={color} />
    <KeyText>{name}</KeyText>
  </>
);

Key.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Key;
