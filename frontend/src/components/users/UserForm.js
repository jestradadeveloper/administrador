import React from 'react'

const UserForm = () => {
  return (
    <div className="w-full flex-col p-4">
      <strong>Add User</strong>
      <form className="w-full mt-6 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="name" className="sr-only">
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              required
              className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-red-500
                  focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="client" className="sr-only">
              Email
            </label>
            <input
              id="client"
              name="client"
              type="text"
              autoComplete="client"
              required
              className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-red-500
                  focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="client" className="sr-only">
             Password
            </label>
            <input
              id="responsible"
              name="responsible"
              type="text"
              autoComplete="responsible"
              required
              className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-red-500
                  focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div>
            <label htmlFor="client" className="sr-only">
              Password confirmation
            </label>
            <input
              id="team"
              name="team"
              type="text"
              autoComplete="team"
              required
              className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-red-500
                  focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Password confirmation"
            />
          </div>


        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-red-600 hover:bg-red-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-red-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              +
            </span>
            Create User
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserForm
