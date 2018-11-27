import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import rem from '../../utils/rem';
import { mobile } from '../../utils/media';
import { navbarHeight } from '../../utils/sizes';
import NavSeparator from './NavSeparator';
import { ghostWhite, oldLavender } from '../../utils/colors';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin-right: ${rem(30)};
`;

const NavLink = styled(Link)`
  flex: 0 0 auto;
  display: inline-block;
  line-height: ${rem(navbarHeight)};
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: ${rem(0.4)};
  text-transform: uppercase;
  color: ${ghostWhite};
  ${mobile(css`
    color: ${oldLavender};
  `)};
  text-decoration: none;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`;

const NavLinks = () => (
  <Wrapper>
    <NavLink to="/">
      <FormattedMessage {...messages.charts} />
    </NavLink>
    <NavSeparator />
    <NavLink to="/features">
      <FormattedMessage {...messages.data} />
    </NavLink>
    <NavSeparator />
    <NavLink to="/">
      <FormattedMessage {...messages.definitions} />
    </NavLink>
    <NavSeparator />
    <NavLink to="/">
      <FormattedMessage {...messages.supportingDocs} />
    </NavLink>
  </Wrapper>
);

export default NavLinks;
