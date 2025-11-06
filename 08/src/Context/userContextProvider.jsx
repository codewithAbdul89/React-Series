import React, { useEffect, useState } from 'react';
import UserContext from './UserContext';
import MessageBox from '../show Messsge';

const UserContextProvider = ({ children }) => {
  const [loginState, setLoginState] = useState(false)
  const [loading, setLoading] = useState(false)

  const [users, setUsers] = useState(() => {
    const localUsers = localStorage.getItem("allUsers");
    return localUsers ? JSON.parse(localUsers) : [];
  });

  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem("currentUser");
    return localUser ? JSON.parse(localUser) : null;
  });

  const [message, setMessage] = useState('');

  // Sync all users
  useEffect(() => {
    localStorage.setItem("allUsers", JSON.stringify(users));
  }, [users]);

  // Sync current user 
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{
      users,
      setUsers,
      user,
      setUser,
      setLoginState,
      loginState,
      message,
      setMessage,
      setLoading,
      loading
    }}>
      {children}
      <MessageBox message={message} />
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
          <div className="w-16 h-16 border-4 border-white border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
