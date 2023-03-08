import CardActions from "../ui/CardActions";
import { useDispatch, useSelector } from "react-redux";
import { destroyTeamById } from "../../store/teams/thunks";
const TeamCard = ({ team, id, actions, show, peopleParticipating }) => {
  const { name, description, responsible, account, people } = team;
  const startDate = team["start-date"];
  const endDate = team["end-date"];
  const dispatch = useDispatch();

  return (
    <div className="pt-3 pb-0 sm:py-4 flex md:flex-row md:items-start items-start flex-col justify-center">
      <img
        src={`https://api.dicebear.com/5.x/fun-emoji/svg?size=100&seed=${name}`}
        alt="avatar"
        className="px-3"
      />
      <div className="flex items-center px-3">
        <div className="flex-col w-full">
          <p className={`text-red-500 ${show ? "text-4xl" : "text-xl"}`}>
            <strong>{name}</strong>
          </p>
          <p>
            <strong>Responsible:</strong>
          </p>
          <p className="break-all">{responsible}</p>
          <p>
            <strong>Account Assigned:</strong> {account}
          </p>
          <p>
            <strong>Participants:</strong> {peopleParticipating}
          </p>

          {actions && (
            <CardActions
              resourceName="teams"
              resourceCallback={() => {
                dispatch(destroyTeamById(id));
              }}
              id={id}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
