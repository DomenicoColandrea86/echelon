import styled, { css } from 'styled-components';
import { Tabs, Icon } from 'antd';
import { List } from 'react-content-loader';
import rem from 'utils/rem';
import { headerFont } from 'utils/fonts';
import { charcoal } from 'utils/colors';

export const { TabPane } = Tabs;

export const Shelf = styled.section`
  padding: 10px 4px;
`;

export const ScrollableTabPane = styled(TabPane)`
  height: 700px;
  overflow: scroll !important;
`;

export const StyledIcon = styled(Icon)`
  color: white;
  font-size: 22px;
`;

export const Title = styled.h2`
  display: block;
  text-align: left;
  width: 100%;
  color: ${charcoal};
  font-size: ${rem(16)};
  font-family: ${headerFont};
`;

export const FilterShelfItem = styled.div`
  display: block;
  position: relative;
  padding: 2px 0px;

  ${p =>
    p.value &&
    p.value.indent > 0 &&
    css`
      margin-left: 20px;
    `};
`;

export const Label = styled.span`
  font-size: 10px;
`;

export const StyledList = styled(List)`
  &:first-of-type {
    margin-top: 5px;
  }
`;
