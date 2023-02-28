import {useEffect, useState} from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState(null)
  const APIURL = "http://localhost:3000";
  useEffect(() => {
    fetch(`${APIURL}/api/v1/users`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="w-full max-w-md px-4 shadow sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-red-500">
          Latest Users
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
          {users && users.map((user) => <UserCard key={user.id} user={user} />)}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
