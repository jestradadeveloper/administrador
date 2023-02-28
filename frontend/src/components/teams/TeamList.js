import TeamCard from "./TeamCard";
import useFetch from "../../utils/useFetch";
import ListLayout from "../layouts/ListLayout";

const TeamList = () => {
  const { data: teams, loading, error } = useFetch("/teams");

  return (
    <ListLayout>
      {teams &&
        teams.map((team) => <TeamCard key={team.id} team={team.attributes} />)}
    </ListLayout>
  );
};

export default TeamList;
