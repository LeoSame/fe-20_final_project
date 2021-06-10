/* eslint-disable max-len */
import React from 'react';

export const phone = (color = 'rgba(125,125,125, 0.5)', filled = true, width = 16, height = 16) => (
  <svg width={width} height={height} viewBox='0 0 70 70' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M32 0C14.328 0 0 14.328 0 32s14.328 32 32 32 32-14.328 32-32S49.672 0 32 0zm15.555 44.121c-.719.684-1.344 1.441-2.063 1.965-1.742 1.246-3.914 1.914-6.438 1.945-2.48.031-4.488-.727-6.32-1.602-3.578-1.711-6.453-4.219-9.188-7.023-2.688-2.766-5.199-6.07-6.672-9.773-1.836-4.625-1.184-9.492 1.328-12.617.422-.531 1.105-1.098 1.727-1.672.625-.586 1.188-1.273 2.086-1.484 2.043-.48 3.492 1.781 4.59 3.344 1.066 1.508 2.375 3.281 1.965 5.328-.223 1.141-1.223 1.805-1.969 2.512-.738.691-1.879 1.355-2.117 2.379-.391 1.672.695 3.359 1.367 4.316 1.516 2.164 3.324 4.098 5.598 5.793 1.098.824 2.625 1.922 4.09 1.559 2.188-.543 2.656-3.293 5.043-3.762 2.273-.445 3.895 1.148 5.234 2.203 1.293 1.023 3.363 2.313 3.305 4.16-.035 1.062-.855 1.757-1.566 2.429z'
      fillRule='evenodd'
      clipRule='evenodd'
      fill={filled ? color : 'none'}
    />
  </svg>
);
