import { css } from 'styled-components';
import { meatBrown, darkMeatBrown } from '../../utils/colors';
import { bodyFont } from '../../utils/fonts';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0.5em;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${meatBrown};
  color: white;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  text-transform: uppercase;
  font-family: ${bodyFont};
  font-weight: bold;
  font-size: 16px;

  &:active,
  &:hover {
    background: ${darkMeatBrown};
  }
`;

export default buttonStyles;
