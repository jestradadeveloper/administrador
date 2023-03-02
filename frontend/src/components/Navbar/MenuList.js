import { MenuItem } from "./MenuItem"
import { UserSession } from "./UserSession"

export const MenuList = () => {
    return (
        <>
            <ul className='flex w-full justify-end'>
                <li className="hidden md:flex"><MenuItem title="Dashboard" link="/" /></li>
                <li><MenuItem title="Accounts" link="/accounts" /></li>
                <li><MenuItem title="Teams" link="/teams" /></li>
                <li><MenuItem title="Users" link="/users" /></li>
            </ul>
            <UserSession />
        </>

    )
}