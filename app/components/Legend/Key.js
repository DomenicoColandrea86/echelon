import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Key = props => {
  const KeyPrimitive = styled.span`
    height: 10px;
    width: 10px;
    margin-right: 0.5em;
    display: inline-block;
    background: ${props.color};
  `;
  return (
    <>
      <KeyPrimitive />
      {props.name}
    </>
  );
};

Key.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Key;
