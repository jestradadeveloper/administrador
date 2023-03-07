import { DashboardLayout } from "../../components/layouts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAccounts } from "../../store/accounts/thunks";
import { getTeams } from "../../store/teams/thunks";
import TeamList from "../../components/teams/TeamList";
import AccountList from "../../components/accounts/AccountList";
export const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
    dispatch(getAccounts());
  }, [dispatch]);

  return (
    <DashboardLayout title="Welcome | Dashboard">
      <TeamList home />
      <AccountList home />
    </DashboardLayout>
  );
};
