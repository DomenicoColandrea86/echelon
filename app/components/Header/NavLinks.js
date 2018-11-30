import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import rem from '../../utils/rem';
import { navbarHeight } from '../../utils/sizes';
import NavSeparator from './NavSeparator';
import { grey, paleGrey } from '../../utils/colors';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin-right: ${rem(30)};
`;

const Link = styled(NavLink)`
  flex: 0 0 auto;
  display: inline-block;
  line-height: ${rem(navbarHeight)};
  height: ${rem(navbarHeight - 4)};
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: ${rem(0.4)};
  text-transform: uppercase;
  color: ${grey};
  font-weight: 600;
  font-size: 12px;
  text-decoration: none;
  padding: 0 20px;
  &:hover,
  &:focus {
    opacity: 0.8;
    color: ${grey};
  }
  &:active {
    transform: scale(0.95);
  }

  &:hover,
  &.active {
    background: ${paleGrey};
    text-decoration: none;
  }
`;

const NavLinks = () => (
  <Wrapper>
    <Link exact activeClassName="active" to="/">
      <FormattedMessage {...messages.charts} />
    </Link>
    <NavSeparator />
    <Link activeClassName="active" to="/features">
      <FormattedMessage {...messages.data} />
    </Link>
    <NavSeparator />
    <Link activeClassName="active" to="/definitions">
      <FormattedMessage {...messages.definitions} />
    </Link>
    <NavSeparator />
    <Link activeClassName="active" to="/supporting-docs">
      <FormattedMessage {...messages.supportingDocs} />
    </Link>
  </Wrapper>
);

export default NavLinks;
