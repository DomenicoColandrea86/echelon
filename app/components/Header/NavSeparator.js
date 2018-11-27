import styled from 'styled-components';

import rem from '../../utils/rem';
import { ghostWhite } from '../../utils/colors';

const NavSeparator = styled.span`
  flex: 0 0 auto;
  width: ${rem(5)};
  height: ${rem(5)};
  margin: 0 ${rem(15)};
  border-radius: 50%;
  background: ${ghostWhite};
  opacity: 0.35;
`;

export default NavSeparator;
