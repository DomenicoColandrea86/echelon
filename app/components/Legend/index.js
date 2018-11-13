/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import * as d3 from 'd3';

class Legend extends React.Component {
  _keys = this.props.data.map(({ name, color }) => ({
    name,
    color,
  }));

  render() {
    return <>hello</>;
  }
}

Legend.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Legend;
