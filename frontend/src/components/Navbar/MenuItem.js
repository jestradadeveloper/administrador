import { NavLink } from "react-router-dom"

export const MenuItem = ({ link, title }) => {
    return (
        <NavLink key={title.toLowerCase()} to={`${link}`} className={({ isActive }) => (isActive ? "p-3 py-3 hover:text-red-500 hover:border-b hover:border-red-500 border-b border-red-500 block" : 'p-3 py-3 hover:text-red-500 border-b border-white hover:border-b hover:border-red-500 block')}>{title}</NavLink>
    )
}
