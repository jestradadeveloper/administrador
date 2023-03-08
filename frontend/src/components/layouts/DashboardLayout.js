import { Box, Grid, Typography } from "@mui/material";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Navbar } from "../Navbar";
import Footer from "../ui/Footer";
import { Notifications } from "../ui/Notifications";

export const DashboardLayout = ({ children, title }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>

      <Navbar />
      <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
        <h1 className="font-bold text-lg md:text-3xl w-full mb-6 text-center text-rose-600">
          {title}
        </h1>
        <Notifications />
        <main className="flex flex-col w-10/12 mx-auto">{children}</main>
      </div>
      <Footer />
    </>
  );
};
