import { Box, Grid, Link, TextField } from "@mui/material";
import { AuthLayout } from "../../../components/layouts";

const LoginPage = () => {
  return (
    <AuthLayout title={"Ingresar"}>
      <Box sx={{ width: 350, padding: "10px 20px", mt: 15 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Email" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <button
              className="bg-red-500 text-white w-full py-3 rounded-md"
            
            >
              Ingresar
            </button>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export { LoginPage };
