import TeamCard from "./TeamCard";
import ListLayout from "../layouts/ListLayout";
import { useContext } from 'react';
import { TeamsContext } from "../../context";

const TeamList = () => {

  const { teams, updatedTeam } = useContext(TeamsContext);

  return (
    <ListLayout>
      {teams &&
        teams.map((team) => <TeamCard key={team.id} team={team.attributes} />)}
    </ListLayout>
  );
};

export default TeamList;
