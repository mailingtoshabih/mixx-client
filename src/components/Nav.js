import logo from '../assets/logo.png';
// import settingsicon from '../assets/settingsicon.png';
import { AuthContext } from '../context/AuthContext';
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from './Menu';





export const Navbar = () => {


    const { user, isFetching, error, dispatch } = useContext(AuthContext)



    // change ambience button



    return (

        <div className='relative z-10 mb-10'>

            <div className='h-1 bg-gradient-to-r from-purple-600 to-blue-600'></div>

            <Menu />

            <nav className="fixed top-0 backdrop-blur-lg px-2 sm:px-4 py-2 mx-0 w-full ">
                <div className=" container flex flex-wrap items-center justify-between mx-auto max-w-7xl">

                    <Link to={'/'} className="flex items-center">
                        <img src={logo} className="h-6 mr-3 lg:h-8" alt="Feeny" />
                    </Link>



                    <div className="flex items-center md:order-2">

                        <button
                            className='hidden md:block w-fit  p-1 md:p-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600'
                            onClick={() => window.location.reload()}>
                            Logout
                        </button>

                       
                    </div>





                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0">

                            <li>
                                <Link to={'/'} className="block py-2 pl-3 pr-4 hover:text-blue-600 rounded md:bg-transparent md:p-0 " aria-current="page">Timeline</Link>
                            </li>
                            <li>
                                <Link to={'/people'} className="block py-2 pl-3 pr-4 font-display  md:hover:text-blue-700 md:p-0">People</Link>
                            </li>
                            <li>
                                <Link to={`/profile/find/${user.email}`} className="block py-2 pl-3 pr-4 font-display  md:hover:text-blue-700 md:p-0">Profile</Link>
                            </li>

                        </ul>
                    </div>


                </div>
            </nav>

        </div>

    )
}
