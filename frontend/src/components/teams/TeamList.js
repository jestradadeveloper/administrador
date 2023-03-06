import { useEffect } from "react";
import TeamCard from "./TeamCard";
import ListLayout from "../layouts/ListLayout";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../../store/teams/thunks";

const TeamList = () => {
  const { teams, isLoading } = useSelector((state) => state.teams);

  return (
    <ListLayout>
      {teams &&
        teams.map((team) => (
          <TeamCard key={team.id} id={team.id} team={team.attributes} actions />
        ))}
    </ListLayout>
  );
};

export default TeamList;
