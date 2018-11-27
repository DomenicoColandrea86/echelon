import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { KeyboardArrowDown } from 'styled-icons/material';
import { Link } from 'react-router-dom';
import rem from '../../utils/rem';
import { paleGrey } from '../../utils/colors';
import { navbarHeight } from '../../utils/sizes';
import { mobile } from '../../utils/media';
import { CloseIcon, FoldIcon } from './NavIcons';
import Logo from './Logo';
import NavButton from './NavButton';
import NavLinks from './NavLinks';

const Wrapper = styled.div`
  display: none;

  ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${rem(navbarHeight)};
  `)};
`;

const SecondaryMenu = styled.div`
  position: absolute;
  top: ${rem(navbarHeight)};
  left: 0;
  right: 0;

  ${p =>
    p.isOpen
      ? css`
          height: ${rem(navbarHeight)};
        `
      : css`
          height: 0;
        `} display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${rem(20)};
  transition: height 0.1s;

  user-select: none;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow-y: hidden;

  background: ${paleGrey};
  color: #868686;
`;

const LogoLink = styled(Link).attrs({
  unstyled: 'true',
  href: '/',
  'aria-label': 'styled components',
})`
  display: inline-block;
  vertical-align: center;
  margin: 0 auto;
`;

const ArrowWrapper = styled.div`
  transition: transform 0.2s;

  ${p =>
    p.shouldRotate &&
    css`
      transform-origin: center center;
      transform: rotate(180deg);
    `};
`;

const StyledIcon = styled.div`
  && {
    width: ${p => rem(p.size || 20)};
    height: ${p => rem(p.size || 20)};
  }
`;

const MobileNavbar = ({
  isSideFolded,
  onSideToggle,
  showSideNav,
  onMobileNavToggle,
  isMobileNavFolded,
}) => (
  <Wrapper>
    {showSideNav !== false && (
      <NavButton active={!isSideFolded} onClick={onSideToggle}>
        {isSideFolded ? <FoldIcon /> : <CloseIcon />}
      </NavButton>
    )}
    <LogoLink to="/">
      <Logo compact />
    </LogoLink>
    <div>
      <NavButton onClick={onMobileNavToggle} active={!isMobileNavFolded}>
        <ArrowWrapper shouldRotate={!isMobileNavFolded}>
          <StyledIcon as={KeyboardArrowDown} size={36} />
        </ArrowWrapper>
      </NavButton>
    </div>

    <SecondaryMenu isOpen={!isMobileNavFolded}>
      <NavLinks />
    </SecondaryMenu>
  </Wrapper>
);

MobileNavbar.propTypes = {
  isSideFolded: PropTypes.bool,
  onSideToggle: PropTypes.func,
  showSideNav: PropTypes.bool,
  onMobileNavToggle: PropTypes.func,
  isMobileNavFolded: PropTypes.bool,
};

export default MobileNavbar;
