import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from "./Context/userContextProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>


);
