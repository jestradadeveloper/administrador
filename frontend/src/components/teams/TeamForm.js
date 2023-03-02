
const TeamForm = () => {
  return (
    <div className="w-full flex-col p-4">
      <strong>Add Team</strong>
      <form className="w-full mt-6 space-y-3" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="name" className="sr-only">
              Team Name:
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
              placeholder="Team Name"
            />
          </div>
          <div>
            <label htmlFor="client" className="sr-only">
              Team Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              autoComplete="description"
              required
              className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-red-500
                  focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Team Description"
            />
          </div>

          <div>
            <label htmlFor="description" className="sr-only">
              Start Date
            </label>
            <input
              id="startDate"
              name="startDate"
              type="text"
              autoComplete="startDate"
              required
              className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-red-500
                  focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Start Date"
            />
          </div>
          <div>
            <label htmlFor="description" className="sr-only">
              End Date
            </label>
            <input
              id="endDate"
              name="endDate"
              type="text"
              autoComplete="endDate"
              required
              className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-red-500
                  focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="End Date"
            />
          </div>
          <div>
            <label htmlFor="client" className="sr-only">
              Members
            </label>
            <input
              id="member_id"
              name="member_id"
              type="text"
              autoComplete="member_id"
              required
              className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-red-500
                  focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Members"
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
            Create Team
          </button>
        </div>
      </form>
    </div>
  )
}

export default TeamForm
