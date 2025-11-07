import { useContext, useEffect } from 'react';
import UserContext from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { user, setLoginState } = useContext(UserContext);
  const navigate = useNavigate()
  function logingOut() {
    localStorage.removeItem("currentUser")
    setLoginState(false)
    location.reload()
  }


  useEffect(() => {

    if (user) {
      navigate('/profile')
    }
    else {
      navigate('/')
    }
  }, [user])



  return (
    <div className='w-full h-screen bg-pink-400 flex gap-10 sm:p-3  flex-col justify-center items-center'>
      <h1 className='text-[100px] text-center sm:p-3  '>Welcome, <span className='text-white'> {user?.username}</span> </h1>
      <button onClick={logingOut} className='hover:opacity-50 bg-red-400 p-2 text-white text-[22px] rounded-lg border-2 border-white'>Log Out</button>
    </div>
  );
}


export default Profile
