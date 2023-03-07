import React from "react";

const GridLayout = ({ children, title }) => {
  return (
    <div className="w-full px-4 sm:p-8 my-3 border-b border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-red-500">
          Latest {title}
        </h5>
      </div>
      <div className="my-3 w-full">
        <ul role="list" className="grid grid-cols-2 md:grid-cols-3 w-full">
          {children}
        </ul>
      </div>
    </div>
  );
};

export default GridLayout;
