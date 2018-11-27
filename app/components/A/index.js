import styled from 'styled-components';
import { gold } from '../../utils/colors';

const A = styled.a`
  color: ${gold};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default A;
