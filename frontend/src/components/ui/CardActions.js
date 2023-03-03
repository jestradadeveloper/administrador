
import { IconButton, Button } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

const CardActions = ({ resourceCallback }) => {
  const onDestroyResource = (evt) => {
    evt.preventDefault()
    resourceCallback()
  }
  return (
    <span className="w-full flex items-center py-1">
      <IconButton>
        <VisibilityRoundedIcon />
      </IconButton>
      <IconButton>
        <EditRoundedIcon />
      </IconButton>
      <IconButton onClick={onDestroyResource}>
        <HighlightOffRoundedIcon />
      </IconButton>
    </span>
  );
};

export default CardActions;
