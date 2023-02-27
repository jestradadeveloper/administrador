import { Box, Grid, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Brand } from "../Navbar/Brand";

export const AuthLayout = ({ children, title }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Brand />
          <PersonOutlineOutlinedIcon />
          <Typography component="h1" variant="h3">
            {title}
          </Typography>
        </Grid>
        <main>{children}</main>
      </Box>
    </>
  );
};
