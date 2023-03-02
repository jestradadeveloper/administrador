
import { IconButton, Button } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
const CardActions = () => {
  
  return (
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
  );
};

export default CardActions;
