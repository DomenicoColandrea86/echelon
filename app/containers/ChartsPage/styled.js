import styled from 'styled-components';
import { meatBrown, darkMeatBrown } from '../../utils/colors';
import { bodyFont } from '../../utils/fonts';

export const ResetButton = styled.a`
  position: absolute;
  top: 50px;
  left: 265px;
  text-align: center;
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

export const Wrapper = styled.section`
  margin: 3em auto;

  &:first-child {
    margin-top: 0;
  }
`;
