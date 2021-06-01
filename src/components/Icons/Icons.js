/* eslint-disable react/prop-types */
import React from 'react';
import * as icons from '../../theme/icons';

function Icons(props) {
  const { type, color, filled, width, height, className } = props;

  const iconJsx = icons[type];

  if (!iconJsx) {
    return null;
  }

  return <span className={className}>{iconJsx(color, filled, width, height)}</span>;
}

export default Icons;
