import { DashboardLayout } from "../../components/layouts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAccounts } from "../../store/accounts/thunks";
import { getTeams } from "../../store/teams/thunks";
import { getUsers } from "../../store/users/thunks";
export const DashboardPage = () => {
  return <DashboardLayout title="Welcome | Dashboard"></DashboardLayout>;
};
