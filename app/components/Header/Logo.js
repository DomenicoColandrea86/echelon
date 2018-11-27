import styled, { css } from 'styled-components';

import rem from '../../utils/rem';
import logo from '../../static/logo.png';

const Logo = styled.div`
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;

  background-position: center;
  background-size: contain;

  ${p =>
    p.compact
      ? css`
          background-image: url(${logo});
          width: ${rem(210)};
          height: ${rem(22)};
        `
      : css`
          background-image: url(${logo});
          width: ${rem(210)};
          height: ${rem(22)};
        `};
`;

export default Logo;
