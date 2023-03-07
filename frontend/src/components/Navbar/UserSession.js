import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { destroyAuthSession } from "../../store/auth/thunks";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import {
  destroyTeamsData,
  destroyAccountsData,
  destroyUsersData,
} from "../../store";

export const UserSession = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onHandleLogout = () => {
    dispatch(destroyAuthSession());
    dispatch(destroyUsersData());
    dispatch(destroyAccountsData());
    dispatch(destroyTeamsData());

    navigate("/");
  };
  return (
    <>
      <div className="relative group inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex text-red-500 w-10 h-10 justify-center rounded-full border border-red-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <PersonOutlineOutlinedIcon />
          </button>
        </div>
        <div
          className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <Link
              to="/profile"
              className="flex w-full p-3 text-red-500 hover:bg-gray-100 transition"
            >
              <AdminPanelSettingsRoundedIcon />
              Profile
            </Link>
            <button
              className="flex w-full p-3 text-red-500 hover:bg-gray-100 transition"
              onClick={onHandleLogout}
            >
              <LogoutRoundedIcon />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
