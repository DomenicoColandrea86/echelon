import styled, { css } from 'styled-components';

const Svg = styled.svg`
  fill: #000;
  fill-opacity: 0.3;

  ${p =>
    p.margin &&
    css`
      margin: ${p.margin.top}px ${p.margin.left}px 0 ${p.margin.right}px;
      width: calc(100% - ${p.margin.left}px - ${p.margin.right}px);
    `};
`;

export default Svg;
