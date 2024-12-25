import React from 'react';

function Center({ children }) {
  return (
    <div className="grid grid-rows-[0px_1fr_20px] items-center justify-items-center min-h-[80vh]">
      <div className="row-start-2">{children}</div>
    </div>
  );
}

export default Center;
