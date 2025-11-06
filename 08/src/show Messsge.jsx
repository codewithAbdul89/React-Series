import React, { useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import UserContext from "./Context/UserContext";




const MessageBox = ({ message }) => {
  const { setMessage, user ,setLoginState} = useContext(UserContext);

  const onClose = () => {
    setMessage('')
    if (user) {
      setLoginState(true);

    }
    else {

      setLoginState(false);
    // location.reload()


    }
  }
  

  const okButtonRef = useRef(null);

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.key === 'Enter' || e.key === " ") {
        e.preventDefault();
        okButtonRef.current?.click()

      }
    }
    if (message) {
      window.addEventListener("keydown", keyHandler)
    }
    return () => {


      window.removeEventListener("keydown", keyHandler)
    }


  }, [message])





  if (!message) return null
  return (
    <div className="message-box">
      <p id="messageText" className="text-xl font-medium">{message}</p>
      <button ref={okButtonRef} onClick={onClose}>OK</button>

      <style jsx="true">{`
        .message-box {
          position: fixed;
          width:24rem;
          top: 50%; 
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding-top: 4rem;
          padding-bottom: 4rem;
           border-radius: 0.75rem;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          text-align: center;
          font-family: 'Inter', sans-serif;
        }

        .message-box button {
          background-color: #3b82f6;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          margin-top: 2rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        .message-box button:hover {
          background-color: #2563eb;
        }
      `}</style>
    </div>

  );
};

export default MessageBox;