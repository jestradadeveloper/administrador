import { CloseOutlined } from "@mui/icons-material";
import { Button, IconButton, Snackbar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { finishLoading, removeNotification } from "../../store";

const Notifications = () => {
  const dispatch = useDispatch();
  const {
    error,
    errorMessages,
    notification,
    notificationMessage,
    notificationType,
  } = useSelector((action) => action.ui);

  const handleClose = () => {
    dispatch(removeNotification());
    dispatch(finishLoading());
  };
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseOutlined fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      {notification && (
        <Snackbar
          open={notification}
          autoHideDuration={6000}
          onClose={handleClose}
          message={`${notificationMessage}`}
          action={action}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        />
      )}
    </>
  );
};

export { Notifications };
