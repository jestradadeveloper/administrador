
import CardActions from "../ui/CardActions";
const UserCard = ({ user }) => {
  const { name, email } = user
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
          <CardActions />
        </div>
      </div>
    </li>
  );
};

export default UserCard;
