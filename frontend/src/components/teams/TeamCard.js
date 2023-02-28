import {IconButton} from "@mui/material"
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
const TeamCard = ({ team }) => {
  const { name, description, start_date, end_date } = team;
  return (
    <li className="pt-3 pb-0 sm:py-4">
      <div className="flex items-center">
        <div className="flex-col">
          <p className="text-sm font-medium text-gray-900">
            <strong>Team:</strong> {name}
          </p>
          <p className="text-sm font-medium text-gray-900">
            <strong>Description:</strong> {description}
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

export default TeamCard;
