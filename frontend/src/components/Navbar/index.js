import { Box, Grid, Typography } from "@mui/material";
import { Brand } from "./Brand";
import { MenuList } from "./MenuList";

export const Navbar = () => {
  return (
    <div className='flex w-10/12 mx-auto justify-around items-center p-8'>
        <Brand />
        <MenuList />
    </div>
  );
};
