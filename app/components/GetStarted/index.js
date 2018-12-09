import React from 'react';
import styled, { css } from 'styled-components';
import { mobile } from '../../utils/media';
import { sidebarWidth } from '../../utils/sizes';
import rem from '../../utils/rem';
import Greeting from '../Greeting';

const wrapperWidth = 300;

const Wrapper = styled.section`
  width: ${rem(1300)};
  height: ${wrapperWidth}px;
  position: absolute;
  left: ${sidebarWidth / 2}px;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;

  ${mobile(css`
    left: 0;
  `)};
`;

const GetStarted = () => {
  const greetings = [
    {
      symbol: '🔮',
      label: 'crystal-ball',
      headline: [
        'Gaze into the Trends ',
        <br key="crystal-ball" />,
        'of past and present.',
      ],
    },
    {
      symbol: '🙈',
      label: 'motion',
      headline: [
        'Difficult to see. ',
        <br key="motion" />,
        'Always in motion is the future…',
      ],
    },
  ];

  const shuffle = arr => arr[Math.floor(Math.random() * arr.length)];

  return (
    <Wrapper>
      <Greeting {...shuffle(greetings)} />
    </Wrapper>
  );
};

export default GetStarted;
