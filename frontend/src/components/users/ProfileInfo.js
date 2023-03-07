import ProfileCard from "./ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuthenticatedUserInfo } from "../../store";
const ProfileInfo = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAuthenticatedUserInfo());
  }, []);

  return <>{userInfo && <ProfileCard profileInfo={userInfo} />}</>;
};

export default ProfileInfo;
