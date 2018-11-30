import { createGlobalStyle } from 'styled-components';
import { navbarHeight } from './utils/sizes';
import { white, blue, paleGrey } from './utils/colors';
import rem from './utils/rem';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: ${white};
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .ant-tabs {
    height: calc(100vh - ${rem(navbarHeight)});
  }

  .ant-tabs-vertical.ant-tabs-left > .ant-tabs-bar {
    background: ${blue};
  }

  .ant-tabs-vertical.ant-tabs-left > .ant-tabs-content {
      padding-left: 10px !important;
  }

  .ant-tabs-tab {
    padding: 10px !important;
  }

  .ant-tabs-vertical.ant-tabs-left > .ant-tabs-content {
    padding-left: 10px;
  }

  .ant-tabs-vertical.ant-tabs-left > .ant-tabs-bar .ant-tabs-nav-container {
    padding-top: 10px;
  }

  .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
    width: 0;
    height: 0 !important;
    top: 15px !important;
    background: transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right:10px solid ${paleGrey};
  }
`;

export default GlobalStyle;
