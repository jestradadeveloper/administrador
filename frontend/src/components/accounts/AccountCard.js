import {IconButton} from "@mui/material"
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
const AccountCard = ({ account }) => {
  const { client, name } = account;
  return (
    <li className="pt-3 pb-0 sm:py-4">
      <div className="flex items-center">
        <div className="flex-col">
          <p className="text-sm font-medium text-gray-900">
            <strong>Account:</strong> {name}
          </p>
          <p className="text-sm font-medium text-gray-900">
            <strong>Client:</strong> {client}
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

export default AccountCard;
