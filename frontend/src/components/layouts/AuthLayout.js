import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Brand } from "../Navbar/Brand";
import { Notifications } from "../ui/Notifications";

export const AuthLayout = ({ children, title }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
      <Notifications />
      <div className="flex md:flex-row flex-col justify-center items-center h-screen">
        <div className="flex flex-col justify-between items-center h-44">
          <Brand />
          <PersonOutlineOutlinedIcon fontSize="large" />
          <h1 className="text-red-500 font-bold"> Welcome to Arkus</h1>
        </div>
        <div className="flex justify-center items-center">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};
