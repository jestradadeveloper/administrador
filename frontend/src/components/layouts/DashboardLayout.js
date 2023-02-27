import { Box, Grid, Typography } from "@mui/material";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Navbar } from "../Navbar";

export const DashboardLayout = ({ children, title }) => {
  return (
    <>
    <HelmetProvider>
      <Helmet>
          <title>{title}</title>
      </Helmet>
    </HelmetProvider>
     
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
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
          <Typography component="h1" variant="h3">
            {title}
          </Typography>
        </Grid>
        <main>{children}</main>
      </Box>
    </>
  );
};
