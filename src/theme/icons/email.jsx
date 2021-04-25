/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import React from 'react';

export const email = (color = 'rgba(125,125,125, 0.5)', filled = true, width = 20, height = 25) => (
  <svg width={width} height={height} viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0 10.5c0 .828.598 1.5 1.333 1.5h13.334c.735 0 1.333-.672 1.333-1.5v-9c0-.827-.598-1.5-1.333-1.5H1.333C.598 0 0 .673 0 1.5v9zm8-2.637L1.537 2.818c-.17-.134-.22-.409-.11-.615.111-.206.34-.265.51-.132L8 6.804l6.063-4.733c.17-.133.399-.074.51.132.11.206.06.481-.11.615L8 7.863zM1.369 10a.355.355 0 0 1-.307-.198c-.113-.204-.067-.48.102-.616L4.48 6.519c.17-.136.398-.081.51.123.114.205.068.48-.101.617L1.573 9.925A.326.326 0 0 1 1.37 10zm13.058-.075c.063.05.134.075.204.075.119 0 .236-.07.307-.198.113-.204.067-.48-.102-.616L11.52 6.519c-.17-.136-.398-.081-.51.123-.114.205-.068.48.101.617l3.316 2.666z'
      fillRule='evenodd'
      clipRule='evenodd'
      fill={filled ? color : 'none'}
    />
  </svg>
);
