import logo from '../assets/logo.png';
import shab from '../assets/shab.jpg';
import { Dropdown } from './Dropdown';
// import settingsicon from '../assets/settingsicon.png';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react'
import { Link } from 'react-router-dom';




export const Navbar = () => {

    const { user, isFetching, error, dispatch } = useContext(AuthContext)


    // change ambience button



    return (

        <div className='relative z-10 mb-5'>
            <div className='h-5 bg-green-300'></div>     // Navbar theme


            <nav className="fixed top-0 backdrop-blur-lg  px-2 sm:px-4 py-1 mx-0 w-full ">

                <div className=" container flex flex-wrap items-center justify-between mx-auto max-w-7xl">

                    <Link to={'/'} className="flex items-center">
                        <img src={logo} className="h-6 mr-3 md:h-8 lg:h-10" alt="Feeny" />
                    </Link>


                    <div className="flex items-center md:order-2">

                        {/* profile button */}
                        <button type="button" className="flex mr-3 text-sm bg-white rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">

                            <span className="sr-only">Open user menu</span>
                            
                            {/* Dropdown here */}
                            {/* <Dropdown/> */}
                        </button>




                        {/* on click profile open this */}
                        {/* <!-- Dropdown menu --> */}
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">

                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@feeny.com</span>
                            </div>


                            <ul className="py-1" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
                                </li>
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>

                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>



                        {/* hamburger here */}
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200"  aria-controls="mobile-menu-2" aria-expanded="false"
                            onClick={() => console.log("Hcliicki")}>


                            <span className="sr-only">Open main menu</span>

                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>





                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0">
                            <li>
                                <Link to={'/'} className="block py-2 pl-3 pr-4 hover:text-blue-600 rounded md:bg-transparent md:p-0 " aria-current="page">Timeline</Link>
                            </li>
                            <li>
                                <Link to={`/profile/find/${user.email}`} className="block py-2 pl-3 pr-4 font-display  md:hover:text-blue-700 md:p-0">Profile</Link>
                            </li>
                            <li>
                                <Link to={'/'} className="block py-2 pl-3 pr-4 font-display  md:hover:text-blue-700 md:p-0">Chat</Link>
                            </li>
                            
                        </ul>
                    </div>


                </div>
            </nav>



        </div>

    )
}
