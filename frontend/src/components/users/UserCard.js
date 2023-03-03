
import { useDispatch } from 'react-redux';
import { destroyUserById } from '../../store/users/thunks';
import CardActions from '../ui/CardActions';
const UserCard = ({ user,id }) => {
  const { name, email } = user.attributes;
  const totalAccounts = user.attributes['total-accounts']
  const totalTeams = user.attributes['total-teams']
  const dispatch = useDispatch();

  return (
    <li className="pt-3 pb-0 sm:py-4">
      <div className="flex items-center">
        <div className="flex-col">
          {name && (
            <p className="text-red-500">
              <strong>{name}</strong>
            </p>
          )}
          <p>
            <strong>Email:</strong> {email}
          </p>
          <span><strong>Teams:</strong> {totalTeams} </span>
          <span><strong>Accounts:</strong> {totalAccounts} </span>
          <CardActions resourceCallback={() => {dispatch(destroyUserById(id)) }}  />
        </div>
      </div>
    </li>
  );
};

export default UserCard;
