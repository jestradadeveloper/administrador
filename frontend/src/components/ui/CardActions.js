import { IconButton, Button } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { NavLink } from "react-router-dom";

const CardActions = ({ resourceCallback, id }) => {
  const onDestroyResource = (evt) => {
    evt.preventDefault();
    resourceCallback();
  };
  return (
    <span className="w-full flex items-center py-1">
      <IconButton>
        <NavLink to={`/teams/${id}`}>
          <VisibilityRoundedIcon />
        </NavLink>
      </IconButton>
      <IconButton>
        <NavLink to={`/teams/${id}/edit`}>
          <EditRoundedIcon />
        </NavLink>
      </IconButton>
      <IconButton onClick={onDestroyResource}>
        <HighlightOffRoundedIcon />
      </IconButton>
    </span>
  );
};

export default CardActions;
