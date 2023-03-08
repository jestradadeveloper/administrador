import ProfileCard from "./ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuthenticatedUserInfo } from "../../store";
import Spinner from "../ui/Spinner/Spinner";
const ProfileInfo = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.ui);
  useEffect(() => {
    dispatch(getAuthenticatedUserInfo());
  }, [isLoading]);

  return (
    <>
      {userInfo &&
        (isLoading ? <Spinner /> : <ProfileCard profileInfo={userInfo} />)}
    </>
  );
};

export default ProfileInfo;
