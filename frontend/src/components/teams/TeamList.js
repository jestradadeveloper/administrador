import { useEffect } from 'react';
import TeamCard from "./TeamCard";
import ListLayout from "../layouts/ListLayout";
import { useDispatch, useSelector } from 'react-redux';
import { getTeams } from '../../store/teams/thunks';

const TeamList = () => {
  const dispatch = useDispatch()
  const { teams, isLoading } = useSelector((state) => state.teams)
  useEffect(() => { 
    dispatch(getTeams())
  }, [])

  return (
    <ListLayout>
      {teams &&
        teams.map((team) => <TeamCard key={team.id} id={team.id} team={team.attributes} />)}
    </ListLayout>
  );
};

export default TeamList;
