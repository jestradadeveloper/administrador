
import { useContext } from 'react';
import useFetch from '../../utils/useFetch'
import ProfileCard from './ProfileCard';
import { AuthContext } from '../../context/auth/AuthContext';
const ProfileInfo = () => {
  const { user } = useContext(AuthContext);
  return(
    <>
     { user && <ProfileCard profile={user}/> }
    </>
  )
};


export default ProfileInfo;
