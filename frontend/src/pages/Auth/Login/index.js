import { useState, useContext, useEffect } from "react";
import { Box, Grid, Link, TextField, Chip, Button } from "@mui/material";
import { AuthLayout } from "../../../components/layouts";
import { ErrorOutline } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { validations } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLoginAuthentication } from "../../../store/auth/thunks";
import { logout, updateErrorState } from "../../../store/auth";
const LoginPage = () => {
  const { isLoggedIn, error, errorMessage } = useSelector(
    (action) => action.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onLoginUser = ({ email, password }) => {
    dispatch(startLoginAuthentication(email, password));
    setTimeout(() => {
      dispatch(updateErrorState({ message: "", error: false }));
    }, 3000);
    navigate("/");
  };
  return (
    <AuthLayout title={"Ingresar"}>
      <form onSubmit={handleSubmit(onLoginUser)} noValidate>
        <Box sx={{ width: 350, padding: "10px 20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {error && (
                <Chip
                  label={`${errorMessage}`}
                  color="error"
                  icon={<ErrorOutline />}
                  className="fadeIn"
                  sx={{ display: error ? "flex" : "none" }}
                />
              )}
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
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export { LoginPage };
