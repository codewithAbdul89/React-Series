import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Protected({
  children,
  authentication = true,
}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoading(false);
  }, [navigate, authStatus, authentication]);

  return loading ? (
    <div className="w-full z-[1000] fixed top-0 left-0 h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-20 h-20 border-4 border-white border-t-blue-500 animate-spin rounded-full"></div>
    </div>
  ) : (
    <>{children}</>   
  );
}
