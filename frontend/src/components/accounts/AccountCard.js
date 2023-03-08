import { destroyAccountById } from "../../store/accounts/thunks";
import CardActions from "../ui/CardActions";
import { useDispatch } from "react-redux";
import { setActiveAccount } from "../../store";

const AccountCard = ({ account, id, teamId }) => {
  const dispatch = useDispatch();
  const { client, name, responsible } = account;
  const team = account["team-assigned"];
  return (
    <li className="pt-3 pb-0 sm:py-4 flex md:flex-row md:items-start items-start flex-col justify-center">
      <img
        src={`https://api.dicebear.com/5.x/fun-emoji/svg?size=100&seed=${client}`}
        alt="icon client"
        className="px-3"
      />
      <div className="flex items-center px-4">
        <div className="flex-col">
          <p className="text-red-500 text-xl break-all">
            <strong>{name}</strong>
          </p>
          <p className="break-all">
            <strong>Client:</strong> {client}
          </p>
          <p>
            <strong>Responsble:</strong>
          </p>
          <p className="break-all">{responsible}</p>
          <p>
            <strong>Team Assigned:</strong> {team}
          </p>

          <CardActions
            resourceName="accounts"
            resourceCallback={() => {
              dispatch(destroyAccountById(id));
            }}
            resourceEditCallback={() => {
              const newAccount = {
                ...account,
                id,
                teamId,
              };
              dispatch(
                setActiveAccount({ account: newAccount, editMode: true })
              );
            }}
          />
        </div>
      </div>
    </li>
  );
};

export default AccountCard;
