import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Emoji from '../Emoji';
import { Header } from '../Layout';

const Wrapper = styled.article`
  .emoji {
    text-align: center;
    display: block;
    font-size: 80px;
  }
`;

const Headline = styled(Header)`
  text-align: center;
`;

const Greeting = ({ symbol, label, headline }) => (
  <Wrapper>
    <Emoji symbol={symbol} label={label} />
    <Headline>{headline}</Headline>
  </Wrapper>
);

Greeting.propTypes = {
  symbol: PropTypes.string,
  label: PropTypes.string,
  headline: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

export default Greeting;
