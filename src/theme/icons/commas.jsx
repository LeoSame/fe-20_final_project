/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React from 'react';

export const commas = (color = '#000000', filled = false, width = 40, height = 40) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 44 31'
    xmlns='http://www.w3.org/2000/svg'
    fill={filled ? color : 'none'}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.65845 11.9026C14.9691 11.9026 19.2741 16.1757 19.2741 21.4484C19.2741 26.7195 14.9691 30.993 9.65845 30.993C4.34797 30.993 0.0429109 26.7195 0.0429109 21.4484L0 20.0841C0 9.54111 8.61007 0.993652 19.2312 0.993652V6.44727C15.562 6.44727 12.1124 7.86613 9.51792 10.4424C9.0185 10.9377 8.56269 11.466 8.15163 12.0211C8.64259 11.9451 9.14578 11.9026 9.65845 11.9026ZM34.3844 11.9026C39.6949 11.9026 43.9999 16.1757 43.9999 21.4484C43.9999 26.7195 39.6949 30.993 34.3844 30.993C29.0738 30.993 24.7687 26.7195 24.7687 21.4484L24.7258 20.0841C24.7258 9.54111 33.336 0.993652 43.957 0.993652V6.44727C40.2879 6.44727 36.8383 7.86613 34.2438 10.4424C33.7443 10.9377 33.2886 11.466 32.8774 12.0211C33.3685 11.9451 33.8715 11.9026 34.3844 11.9026Z'
      fill='#18CFAB'
    ></path>
  </svg>
);
