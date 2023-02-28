import Accounts from "../../components/accounts/Accounts";
import { DashboardLayout } from "../../components/layouts";


export const AccountsPage = () => {
    return(
       <DashboardLayout title="Mind Accounts">
            <Accounts />
       </DashboardLayout>
    )
}