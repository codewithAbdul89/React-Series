import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./Components/Login ";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/userContextProvider";
import About from './Components/About';
import SignUp from './Components/signUp'
import Verification from './Components/verification';
import PasswordChanger from './Components/passwordChanger';


function App() {
  return (
    <UserContextProvider>
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/SignUp" element={<SignUp />} />

          <Route path='/verification' element={<Verification />} />

          <Route path='/passwordChanger' element={<PasswordChanger />} />

          <Route path='/About' element={<About />} />

          <Route path='/profile' element={<Profile />} />



        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
