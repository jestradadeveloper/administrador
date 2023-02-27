
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { MenuItem } from "./MenuItem";

export const UserSession = () => {
    return (
        <>
            <div className="relative group inline-block text-left">
                <div>
                    <button type="button" className="inline-flex text-red-500 w-10 h-10 justify-center rounded-full border border-red-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        <PersonOutlineOutlinedIcon />
                    </button>
                </div>
                <div className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1" role="none">
                        <MenuItem title="Profile" link="/profile" />
                        <form method="POST" action="#" role="none">
                            <button type="submit" className="text-gray-700 hover:bg-gray-50 block w-full px-4 py-3 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}