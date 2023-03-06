import ListLayout from "../layouts/ListLayout";
import UserCard from "./UserCard";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context";
import { getUsers } from "../../store/users/thunks";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const { users, isLoading } = useSelector((state) => state.users);
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
