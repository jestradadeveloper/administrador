import Accounts from "../../components/accounts/Accounts";
import { DashboardLayout } from "../../components/layouts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAccounts } from "../../store/accounts/thunks";
import { getTeams } from "../../store/teams/thunks";
import { setFormMode } from "../../store";

export const AccountsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccounts());
    dispatch(getTeams());
  }, []);
  return (
    <DashboardLayout title="Mind Accounts">
      <Accounts />
    </DashboardLayout>
  );
};
