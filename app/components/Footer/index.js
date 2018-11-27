import React from 'react';
import styled, { css } from 'styled-components';

import { Content } from '../Layout';
import rem from '../../utils/rem';
import { mobile } from '../../utils/media';
import { grey, paleGrey } from '../../utils/colors';
import Emoji from '../Emoji';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${grey};
  background: ${paleGrey};
  box-sizing: border-box;
  margin-top: ${rem(50)};
`;

const FooterContent = styled(Content)`
  padding: ${rem(30)} ${rem(40)} ${rem(30)} ${rem(40)};

  ${mobile(css`
    padding: ${rem(30)} ${rem(20)} ${rem(30)} ${rem(20)};
  `)};
`;

const Footer = () => (
  <Wrapper>
    <FooterContent hero>
      copyright 2018 <Emoji symbol="🔥" label="fire" />
    </FooterContent>
  </Wrapper>
);

export default Footer;
