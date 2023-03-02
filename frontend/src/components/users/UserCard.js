import { useContext } from 'react';
import { UserContext } from '../../context';
import { IconButton, Button } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const { name, email } = user.attributes;
  const { destroyUser } = useContext(UserContext)
  const onDestroy = () => {
    const userToDelete = {
      ...user
    }
    destroyUser(userToDelete, true);
   //navigate('/users',{replace:true})
  }

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
          <span className="w-full flex items-center py-1">
            <IconButton>
              <VisibilityRoundedIcon />
            </IconButton>
            <IconButton>
              <EditRoundedIcon />
            </IconButton>

            <Button onClick={onDestroy}>
              <HighlightOffRoundedIcon />
            </Button>
          </span>
        </div>
      </div>
    </li>
  );
};

export default UserCard;
