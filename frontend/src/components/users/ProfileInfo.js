

import useFetch from '../../utils/useFetch'
import ProfileCard from './ProfileCard';
const ProfileInfo = () => {
  const {data, loading, error} = useFetch('/users/1')
  if(error){
    console.log(error)
  }
  return(
    <>
     { loading && <div>Loading</div> }
     { data && <ProfileCard profile={data}/> }
    </>
  )
};


export default ProfileInfo;
