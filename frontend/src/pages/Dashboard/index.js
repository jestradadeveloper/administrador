import { DashboardLayout } from "../../components/layouts";
import useFetch from '../../utils/useFetch'

export const DashboardPage = () => {
  const {data, loading, error} = useFetch('/up')

  return <DashboardLayout title="Welcome | Dashboard">{ data &&  data.status }</DashboardLayout>;
};
