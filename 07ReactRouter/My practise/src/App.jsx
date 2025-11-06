import React from "react";
import "./index.css"
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>

<Header/>
<Outlet/>
<Footer/>
    </div>
  )
}
export default App