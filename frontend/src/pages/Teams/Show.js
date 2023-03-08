import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { DashboardLayout } from "../../components/layouts";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTeamById } from "../../store";
import TeamCard from "../../components/teams/TeamCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  destroyMemberFromTeam,
  showParticipantsByTeamId,
} from "../../store/teams/thunks";
import { Button, IconButton } from "@mui/material";
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
    <DashboardLayout title={`Team`}>
      <div className="flex mx-auto w-full justify-between flex-wrap">
        <Link to="/teams" className="my-4 w-full">
          <Button color="error">
            <ArrowBackIosIcon />
            Back to team list
          </Button>
        </Link>
        {active && participants && (
          <TeamCard
            team={active}
            id={teamId}
            actions={false}
            show
            peopleParticipating={participants.length}
          />
        )}
        <div className="flex flex-col w-4/12">
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
