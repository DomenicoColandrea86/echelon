/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import rem from '../../utils/rem';
import { orange } from '../../utils/colors';
import { navbarHeight } from '../../utils/sizes';
import { headerFont } from '../../utils/fonts';
import { mobile } from '../../utils/media';

import NavLinks from './NavLinks';
import Logo from './Logo';
import MobileNavbar from './MobileNavbar';
import Emoji from '../Emoji';

const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  padding: 0;
  z-index: 3;
  width: 100%;
  height: ${rem(navbarHeight)};
  color: white;
  background: white;
  font-weight: 500;
  font-size: ${rem(15)};
  font-family: ${headerFont};
  box-sizing: border-box;
  border-bottom: 3px solid ${orange};
  transition: background 300ms ease-out;
  box-shadow: 0 2px 2px 0 rgba(50, 50, 50, 0.2);
`;

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NormalNavbar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${rem(20)};
  justify-content: space-between;
  ${StartWrapper}, ${EndWrapper} {
    ${mobile(css`
      display: none;
    `)};
  }
`;

const LogoLink = styled(Link).attrs({
  unstyled: 'true',
  href: '/',
})`
  display: inline-block;
  vertical-align: center;
  margin-right: ${rem(35)};

  span {
    font-size: 28px;
    vertical-align: middle;
    margin-left: 6px;
    top: 2px;
    position: relative;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;

const Navbar = ({
  onSideToggle,
  onMobileNavToggle,
  isSideFolded,
  isMobileNavFolded,
  showSideNav,
}) => (
  <Wrapper>
    <NormalNavbar>
      <StartWrapper>
        <LogoLink to="/">
          <Logo />
          <Emoji symbol="🎄" label="christmas tree" />
        </LogoLink>
      </StartWrapper>
      <EndWrapper>
        <NavLinks />
      </EndWrapper>
    </NormalNavbar>
    <MobileNavbar
      isSideFolded={isSideFolded}
      isMobileNavFolded={isMobileNavFolded}
      onSideToggle={onSideToggle}
      onMobileNavToggle={onMobileNavToggle}
      showSideNav={showSideNav}
    />
  </Wrapper>
);

Navbar.propTypes = {
  onSideToggle: PropTypes.any,
  onMobileNavToggle: PropTypes.any,
  isSideFolded: PropTypes.bool,
  isMobileNavFolded: PropTypes.bool,
  showSideNav: PropTypes.bool,
};

export default Navbar;
