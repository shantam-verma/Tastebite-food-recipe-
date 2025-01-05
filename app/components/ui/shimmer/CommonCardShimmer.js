import React from 'react';

export default function CommonCardShimmerUi({ ingredient = false }) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ${ingredient ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}
    >
      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex flex-col w-full animate-pulse">
          <div className="h-36 md:h-60 w-full bg-gray-400 rounded-xl" />
          <div className="mt-3 pl-2 ">
            <div className="h-4 bg-gray-400 rounded w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}
