import Accounts from "../../components/accounts/Accounts";
import { DashboardLayout } from "../../components/layouts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setFormMode } from "../../store";

export const AccountsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFormMode());
  }, []);
  return (
    <DashboardLayout title="Mind Accounts">
      <Accounts />
    </DashboardLayout>
  );
};
