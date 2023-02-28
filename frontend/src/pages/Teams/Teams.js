import { DashboardLayout } from "../../components/layouts";
import Teams from "../../components/teams/Teams";


export const TeamsPage = () => {
    return(
       <DashboardLayout title="Mind Teams">
            <Teams />
       </DashboardLayout>
    )
}