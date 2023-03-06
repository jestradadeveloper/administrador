import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
  }, [teamId, participants]);
  useEffect(() => {
    dispatch(setTeamById(teamId));
  }, [teamId]);
  const onDestroyMember = (userId) => {
    dispatch(destroyMemberFromTeam(teamId, userId));
  };
  return (
    <DashboardLayout title="Show Team">
      <div className="flex mx-auto w-8/12 justify-between">
        {active && <TeamCard team={active} id={teamId} actions={false} show />}
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
