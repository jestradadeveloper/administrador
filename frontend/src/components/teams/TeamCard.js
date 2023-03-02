import { IconButton, Button } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

const TeamCard = ({ team }) => {
  const { name, description, responsible, account, people, start_date, end_date } = team;
  const startDate = team['start-date']
  const endDate = team['end-date']

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

          <span className="w-full flex items-center py-1">
            <IconButton>
              <VisibilityRoundedIcon />
            </IconButton>
            <IconButton>
              <EditRoundedIcon />
            </IconButton>

            <Button>
              <HighlightOffRoundedIcon />
            </Button>
          </span>
        </div>
      </div>
    </li>
  );
};

export default TeamCard;
