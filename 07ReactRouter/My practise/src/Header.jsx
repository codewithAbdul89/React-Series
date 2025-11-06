import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    function onfucser() {
        return (
            className = "p-2 border border-gray-500"
        )
    }
    return (
        <div>
            <header>
                <nav className=' py-1 shadow sticky z-50 px-8 flex justify-between items-center'>
                    <div>
                        <img className='w-[200px]' src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="" />
                    </div>
                    <div>
                        <ul className='flex gap-7 font-[500] items-center'>
                            <li>
                                  <NavLink to="/Home" className={({ isActive }) => isActive?"text-orange-500 " :"text-black hover:text-blue-500"} >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                   <NavLink to="/About" className={({ isActive }) => isActive?"text-orange-500 " :"text-black hover:text-blue-500"} >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact" className={({ isActive }) => isActive?"text-orange-500 " :"text-black hover:text-blue-500"} >
                                    Contact
                                </NavLink>
                            </li>


                            <li>
                                <NavLink to='/GitHub/' className={({ isActive }) => 
                        isActive ? "text-orange-500 hover:text-orange-500" : "text-black  hover:text-blue-500   "
                                    
                        }>
                                    GitHub
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='flex gap-7 items-center'>
                        <button className='text-purple-500 font-semibold  focus:ring-4 focus:ring-gray-300 focus:rounded p-[0.3rem] py-1'
                        >Log in</button>
                        <button className='p-2  text-white bg-sky-500 rounded-xl'>Sign Up</button>
                    </div>
                </nav>
            </header>




        </div>
    )
}

export default Header