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
  box-sizing: border-box;
  z-index: 3;

  width: 100%;
  height: ${rem(navbarHeight)};

  font-family: ${headerFont};
  font-size: ${rem(15)};
  font-weight: 500;
  background: white;
  border-bottom: 3px solid ${orange};
  transition: background 300ms ease-out;
  color: white;
  padding: 0;
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
