import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import FilterBarShelf from '../../containers/FilterBarShelf/index';

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
    {showSideNav !== false && <FilterBarShelf isFolded={isSideFolded} />}
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
