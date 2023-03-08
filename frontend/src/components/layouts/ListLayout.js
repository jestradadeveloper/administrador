import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../ui/Spinner/Spinner";

const ListLayout = ({ children, title }) => {
  const { isLoading } = useSelector((state) => state.ui);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="w-full max-w-md px-4 shadow sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-red-500">
              Latest {title}
            </h5>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-scroll h-96"
            >
              {children}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ListLayout;
