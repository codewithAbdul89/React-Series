import { useSelector } from 'react-redux'
import LogOut from './LogOut'
import { NavLink } from 'react-router-dom'
import { homeIcon, openSvg } from "../../assets/Icons"
import { CloseSvg } from '../../assets/Icons'
import { useState } from 'react'

function Header() {

    const [openMenu, setOpenMenu] = useState(false)

    const isLoggedIn = useSelector((state => state.auth.isLoggedIn))




    const navItems = [
        {
            name: (
                <span className="flex items-center justify-center gap-[2px] hover:opacity-45">
                    {homeIcon}
                    <span>Home</span>
                </span>
            ),
            "slug": "/",
            active: true
        },

        {
            "name": "SignIn",
            "slug": "/signin",
            "active": !isLoggedIn
        },
        {
            "name": "SignUp",
            "slug": "/signup",
            "active": !isLoggedIn
        },
        {
            "name": "About",
            "slug": "/about",
            "active": isLoggedIn
        },
        {
            "name": "Skill",
            "slug": "/skill",
            "active": isLoggedIn
        },
        {
            "name": "Project",
            "slug": "/project",
            "active": isLoggedIn
        },
        {
            "name": "Contact",
            "slug": "/contact",
            "active": isLoggedIn
        },

    ]

    return (
        <div className=' bg-brand-beige w-full px-10 min-h-[76px] py-2   sm:block flex fixed top-0 left-0 z-10 mb-20  border-b-2 sm:px-0 border-white '>
            <div className={`sm:flex sm:justify-between sm:items-center w-full sm:pr-3 ${openMenu ? "sm:border-b-2" : ""}  `}>
                {/* IMG */}
                <div className='w-auto flex-shrink-0 sm:px-3'>
                    <img
                        className='max-h-[76px] pb-[2px] sm:px-3    sm:h-[80px] object-contain sm:w-full'
                        src="https://i.ibb.co/tw7GVgNJ/image.png" alt="main_logo" />
                </div>
                {/* Toggle button for sm */}
                <div className='hidden sm:block sm:pr-6'>
                    <button
                        className='hover:opacity-50'
                        onClick={() => setOpenMenu(p => !p)}
                    >
                        {openMenu ? (<CloseSvg />) : (openSvg)}
                    </button>
                </div>
            </div>

            <ul
                className={` bg-brand-beige flex md:ml-auto md:gap-5 w-full transition-all ease-in-out duration-1000  items-center sm:flex-col sm:pt-2   sm:text-xl justify-center  

                ${isLoggedIn ? "sm:grid grid-cols-2 sm:gap-[9px] " : "sm:block sm:space-y-[7px]"} 
                ${openMenu ? "block  max-h-76 sm:py-1 animate-slide-down" : " sm:hidden"}`}>


                {navItems.map(items => items.active
                    ? (<li key={items.name}>

                        <NavLink
                            to={items.slug}
                            onClick={() => setOpenMenu(false)}
                            className={({ isActive }) => `inline-block duration-300 transition-all ease-in  sm:italic px-6 py-[9px] md:hover:scale-[1.1] sm:p-0 
                            rounded-full  sm:bg-brand-cream  sm:font-bold sm:border-b-2 border-white sm:w-full  sm:rounded-lg sm:shadow sm:text-center 
                            ${isActive ? "transition duration-300 sm:text-brand-brown font-bold bg-brand-brown text-white" : "sm:text-brand-gold text-brand-gold/80  bg-white"}
                            `}
                        >{items.name}</NavLink>

                    </li>) :
                    null)}            {
                    isLoggedIn && <li className='sm:bg-brand-cream flex justify-center items-center w-full font-bold hover:opacity-50 bg-white/80 text-red-500 rounded-full sm:rounded-lg  sm:text-brand-gold px-6 py-[9px] sm:p-0 sm:border-b-2 border-white '>
                        <LogOut />
                    </li>
                }
            </ul>

        </div>
    )
}

export default Header
