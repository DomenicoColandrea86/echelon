import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '../H1';
// import A from './A';
// import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        {/* <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A> */}
        <NavBar>
          <H1>TrendTracker</H1>
          <HeaderLink to="/">
            <FormattedMessage {...messages.charts} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.data} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.definitions} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.supportingDocs} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
