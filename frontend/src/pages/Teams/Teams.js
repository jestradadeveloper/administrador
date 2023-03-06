import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DashboardLayout } from "../../components/layouts";
import Teams from "../../components/teams/Teams";
import { getTeams } from "../../store/teams/thunks";

export const TeamsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
  }, []);
  return (
    <DashboardLayout title="Mind Teams">
      <Teams />
    </DashboardLayout>
  );
};
