import { IconButton } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const UserCard = ({ user }) => {
  const { name, email } = user;
  return (
    <li className="pt-3 pb-0 sm:py-4">
      <div className="flex items-center">
        <div className="flex-col">
          {name && (
            <p className="text-sm font-medium text-gray-900">
              <strong>Name:</strong> {name}
            </p>
          )}
          <p className="text-sm font-medium text-gray-900">
            <strong>Email:</strong> {email}
          </p>
          <span class="w-full flex items-center py-1">
            <IconButton>
              <EditRoundedIcon />
            </IconButton>
            <IconButton>
              <HighlightOffRoundedIcon />
            </IconButton>
          </span>
        </div>
      </div>
    </li>
  );
};

export default UserCard;
