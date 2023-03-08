import { useEffect } from "react";
import TeamCard from "./TeamCard";
import ListLayout from "../layouts/ListLayout";
import GridLayout from "../layouts/GridLayout";
import { useSelector } from "react-redux";

const TeamList = ({ home }) => {
  const { teams } = useSelector((state) => state.teams);

  return (
    <>
      {home ? (
        <GridLayout title="Teams">
          {teams &&
            teams.map((team) => (
              <TeamCard
                key={team.id}
                id={team.id}
                team={team.attributes}
                actions
                peopleParticipating={team.attributes.people}
              />
            ))}
        </GridLayout>
      ) : (
        <ListLayout title="Teams">
          {teams &&
            teams.map((team) => (
              <TeamCard
                key={team.id}
                id={team.id}
                team={team.attributes}
                actions
                peopleParticipating={team.attributes.people}
              />
            ))}
        </ListLayout>
      )}
    </>
  );
};

export default TeamList;
