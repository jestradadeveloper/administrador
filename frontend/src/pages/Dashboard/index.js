import { DashboardLayout } from "../../components/layouts";
import { useEffect, useState } from "react";

export const DashboardPage = () => {
  const APIURL = "http://localhost:3000";
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    fetch(`${APIURL}/up`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.time);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return <DashboardLayout title="Welcome | Dashboard">{ posts ? 'Online' : ''}</DashboardLayout>;
};
