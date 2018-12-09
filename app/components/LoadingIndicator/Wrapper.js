import styled, { css } from 'styled-components';
import { mobile } from '../../utils/media';
import { sidebarWidth } from '../../utils/sizes';

const Wrapper = styled.div`
  margin: auto;
  width: 40px;
  height: 40px;
  position: absolute;
  left: ${sidebarWidth / 2}px;
  right: 0;
  top: 0;
  bottom: 0;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;

  ${mobile(css`
    left: 0;
  `)};
`;

export default Wrapper;
