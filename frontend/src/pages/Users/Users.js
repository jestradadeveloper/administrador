import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DashboardLayout } from "../../components/layouts";
import Users from "../../components/users/Users";
import { getUsers } from "../../store/users/thunks";

export const UsersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <DashboardLayout title="Users">
      {" "}
      <Users />
    </DashboardLayout>
  );
};
