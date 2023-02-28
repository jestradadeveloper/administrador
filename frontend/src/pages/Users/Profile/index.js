import { DashboardLayout } from "../../../components/layouts";
import ProfileInfo from "../../../components/users/ProfileInfo";

export const ProfilePage = () => {
  return <DashboardLayout title="Profile">
    <ProfileInfo />
  </DashboardLayout>;
};
