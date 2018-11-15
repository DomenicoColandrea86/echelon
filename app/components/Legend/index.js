import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import Key from './Key';
import Wrapper from './Wrapper';

const Legend = ({ data = [] }) => (
  <>
    {data.map(k => (
      <Wrapper key={uid(k)}>
        <Key {...k} />
      </Wrapper>
    ))}
  </>
);

Legend.propTypes = {
  data: PropTypes.array,
};

export default Legend;
