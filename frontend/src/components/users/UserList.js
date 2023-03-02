import ListLayout from "../layouts/ListLayout";
import UserCard from "./UserCard";
import { useContext } from 'react';
import { UserContext } from '../../context';

const UserList = () => {
  const { users, updatedUser } = useContext(UserContext);
  return (
    <ListLayout title="Users">
      {users &&
        users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
    </ListLayout>
  );
};

export default UserList;
