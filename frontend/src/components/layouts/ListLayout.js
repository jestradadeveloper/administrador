import React from 'react'

const ListLayout = ({children, title}) => {
  return (
    <div className="w-full max-w-md px-4 shadow sm:p-8">
    <div className="flex items-center justify-between mb-4">
      <h5 className="text-xl font-bold leading-none text-red-500">
        Latest {title}
      </h5>
      <a
        href="#"
        className="text-sm font-medium text-gray-600 hover:underline"
      >
        View all
      </a>
    </div>
    <div className="flow-root">
      <ul
        role="list"
        className="divide-y divide-gray-200 dark:divide-gray-700"
      >
        {children}
      </ul>
    </div>
  </div>
  )
}

export default ListLayout
