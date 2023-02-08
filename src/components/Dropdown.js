import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react'
import { Link } from 'react-router-dom';








export const Dropdown = () => {


    const [drop, setDrop] = useState("hidden");

    const dropdown = (e) => {
        e.preventDefault();
        drop === "hidden" ? setDrop("block") : setDrop("hidden");
    }

    const { user, isFetching, error, dispatch } = useContext(AuthContext)





    
    return (

        <div>

            <div className="hidden md:inline-flex text-black border-indigo-600  font-medium rounded text-sm px-4 py-2.5 text-center  items-center dark:bg-blue-600 " id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation"
                onClick={dropdown}>

                {user.username.toUpperCase().split(' ')[0]}

                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                    </path>
                </svg>
                
            </div>





            {/* <!-- Dropdown menu --> */}

            <div className={`hidden md:${drop} z-50 my-4 right-8  absolute bg-purple-200 divide-y divide-gray-100 rounded-lg shadow w-44`} id="dropdownInformation">

                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
                    <div className="font-medium truncate">name@flowbite.com</div>
                </div>

                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                    <li>
                        <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-">Dashboard</a>
                    </li>

                </ul>

                <div className="py-2">
                    <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
                </div>

            </div>




        </div>
    )
}
