import useFetch from '../../utils/useFetch'
import ListLayout from "../layouts/ListLayout";
import UserCard from "./UserCard";

const UserList = () => {
  const {data:users, loading, error} = useFetch('/users')
  return (
    <ListLayout title="Users">
      {users &&
        users.map((user) => (
          <UserCard key={user.id} user={user.attributes} />
        ))}
    </ListLayout>
  );
};

export default UserList;
