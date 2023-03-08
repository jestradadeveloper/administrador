import ListLayout from "../layouts/ListLayout";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";

const UserList = () => {
  const { users } = useSelector((state) => state.users);
  return (
    <ListLayout title="Users">
      {users &&
        users.map((user) => (
          <UserCard key={user.id} id={user.id} user={user} />
        ))}
    </ListLayout>
  );
};

export default UserList;
