import React from 'react';

function Avatar() {
  return (
    <svg id='icon-avatar-def' viewBox='0 0 64 64' width='30' height='30'>
      <path
        clipRule='evenodd'
        fill='none'
        d='M19.5 16.5h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4zM31.5 20.5v24'
      />
      <path
        d='M56 0H8a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8zm-8.336 54H16.336C13.863 54 12 51.799 12 49.079c.818-8.002 5.5-11.989 11.957-15.094a19.03 19.03 0 0 1 2.609-.995c-3.418-2.105-5.756-6.077-5.756-10.689C20.811 15.508 25.82 10 32 10s11.188 5.508 11.188 12.301c0 4.612-2.336 8.584-5.754 10.689.895.276 1.771.594 2.609.995C46.496 37.09 51.184 41.077 52 49.079 52 51.799 50.139 54 47.664 54z'
        fill='grey'
      />
    </svg>
  );
}

export default Avatar;