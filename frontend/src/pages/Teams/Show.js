import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { DashboardLayout } from "../../components/layouts";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTeamById } from "../../store";
import TeamCard from "../../components/teams/TeamCard";
import {
  destroyMemberFromTeam,
  showParticipantsByTeamId,
} from "../../store/teams/thunks";
import { IconButton } from "@mui/material";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
const TeamPageShow = () => {
  const { teamId } = useParams();
  const dispatch = useDispatch();
  const { active, participants } = useSelector((action) => action.teams);
  useEffect(() => {
    dispatch(showParticipantsByTeamId(teamId));
  }, [teamId, dispatch]);
  useEffect(() => {
    dispatch(setTeamById(teamId));
  }, [teamId, dispatch]);
  const onDestroyMember = (userId) => {
    dispatch(destroyMemberFromTeam(teamId, userId));
    dispatch(showParticipantsByTeamId(teamId));
    dispatch(setTeamById(teamId));
  };
  return (
    <DashboardLayout title="Show Team">
      <Link to="/teams" className="my-4">
        <span className="p-3 bg-red-500 text-white rounded-lg">
          Back to team list
        </span>
      </Link>
      <div className="flex mx-auto w-8/12 justify-between">
        {active && participants && (
          <TeamCard
            team={active}
            id={teamId}
            actions={false}
            show
            peopleParticipating={participants.length}
          />
        )}
        <div className="flex flex-col">
          {participants && <strong>Team's Members</strong>}
          {participants &&
            participants.map((participant) => (
              <div key={participant.id} className="py-3 font-bold text-red-400">
                {participant.attributes.email}
                <IconButton onClick={() => onDestroyMember(participant.id)}>
                  <HighlightOffRoundedIcon />
                </IconButton>
              </div>
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
export default TeamPageShow;
