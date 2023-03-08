import { IconButton, Button } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { NavLink } from "react-router-dom";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
const CardActions = ({
  resourceCallback,
  id,
  resourceName,
  resourceEditCallback,
}) => {
  const onDestroyResource = (evt) => {
    evt.preventDefault();
    resourceCallback();
  };
  const onEditResource = (evt) => {
    resourceEditCallback();
  };
  return (
    <span className="w-full flex items-center py-1">
      {resourceName == "teams" && (
        <NavLink to={`/${resourceName}/${id}`}>
          <IconButton color="primary">
            <VisibilityRoundedIcon />
          </IconButton>
        </NavLink>
      )}
      {resourceName == "teams" ? (
        <NavLink to={`/${resourceName}/${id}/edit`}>
          <IconButton color="info">
            <PersonAddAlt1Icon />
          </IconButton>
        </NavLink>
      ) : (
        <IconButton color="info" onClick={onEditResource}>
          <EditRoundedIcon />
        </IconButton>
      )}

      <IconButton color="error" onClick={onDestroyResource}>
        <HighlightOffRoundedIcon />
      </IconButton>
    </span>
  );
};

export default CardActions;
