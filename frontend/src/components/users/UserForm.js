import { useForm } from "react-hook-form";
import { Box, Grid, Link, TextField, Chip, Button } from "@mui/material";
import { validations } from "../../utils";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../store/users/thunks";
const UserForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onCreateUser = ({ email, password, name }) => {
    dispatch(addNewUser(email, password, name));
  };
  return (
    <div className="w-full flex-col p-4">
      <strong>Add User</strong>
      <form
        className="w-full mt-6 space-y-6"
        onSubmit={handleSubmit(onCreateUser)}
        noValidate
      >
        <Box>
          <Grid item xs={12}>
            <TextField
              type="name"
              label="Name"
              variant="filled"
              fullWidth
              {...register("name", {
                required: "Name is Required",
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              label="Email"
              variant="filled"
              fullWidth
              {...register("email", {
                required: "Email is Required",
                validate: validations.isEmail,
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Password"
              variant="filled"
              fullWidth
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="error"
              type="submit"
              variant="outlined"
              size="large"
              fullWidth
              disabled={!!errors.email || !!errors.password}
              sx={{ marginTop: 2 }}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                +
              </span>
              Create User
            </Button>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default UserForm;
