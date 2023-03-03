
import CardActions from "../ui/CardActions";
import { useDispatch } from 'react-redux';
import { destroyTeamById } from "../../store/teams/thunks";
const TeamCard = ({ team, id }) => {
  const { name, description, responsible, account, people } = team;
  const startDate = team['start-date']
  const endDate = team['end-date']
  const dispatch = useDispatch();
  return (
    <li className="pt-3 pb-0 sm:py-4">
      <div className="flex items-center">
        <div className="flex-col">
          <p className="text-red-500">
            <strong>{name}</strong>
          </p>
          <p><strong>Responsible:</strong> {responsible}</p>
          <p><strong>Account Assigned:</strong> {account}</p>
          <p><strong>Participants:</strong> {people}</p>
          <strong>Working Period:</strong>
          <p>
            <span>{startDate} to {endDate}</span>
          </p>
          <CardActions resourceCallback={() => {dispatch(destroyTeamById(id)) }}  />
        </div>
      </div>
    </li>
  );
};

export default TeamCard;
