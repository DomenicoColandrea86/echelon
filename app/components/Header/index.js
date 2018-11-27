import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Header = ({
  showSideNav,
  isMobileNavFolded,
  onMobileNavToggle,
  isSideFolded,
  onSideToggle,
}) => (
  <div>
    <Navbar
      showSideNav={showSideNav}
      isSideFolded={isSideFolded}
      isMobileNavFolded={isMobileNavFolded}
      onSideToggle={onSideToggle}
      onMobileNavToggle={onMobileNavToggle}
    />
    {showSideNav !== false && <Sidebar isFolded={isSideFolded} />}
  </div>
);

Header.propTypes = {
  onSideToggle: PropTypes.func,
  onMobileNavToggle: PropTypes.func,
  isSideFolded: PropTypes.bool,
  isMobileNavFolded: PropTypes.bool,
  showSideNav: PropTypes.bool,
};

export default Header;
