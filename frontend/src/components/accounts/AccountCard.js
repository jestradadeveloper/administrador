import { destroyAccountById } from "../../store/accounts/thunks";
import CardActions from "../ui/CardActions";
import { useDispatch } from 'react-redux';

const AccountCard = ({ account, id }) => {
  const dispatch = useDispatch();
  const { client, name, responsible} = account;
  const team = account['team-assigned']
  return (
    <li className="pt-3 pb-0 sm:py-4">
      <div className="flex items-center">
        <div className="flex-col">
          <p className="text-red-500">
            <strong>{name}</strong>
          </p>
          <p>
            <strong>Client:</strong> {client}
          </p>
          <p>
            <strong>Responsble:</strong> {responsible}
          </p>
          <p>
            <strong>Team Assigned:</strong> {team}
          </p>
          <CardActions resourceCallback={() => {dispatch(destroyAccountById(id)) }}  />
        </div> 
      </div>
    </li>
  );
};

export default AccountCard;
