import React from 'react'
import { useState } from 'react'




export const Prompt = () => {


    const [menu, setMenu] = useState("hidden");




    return (
        <div className='relative'>

            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                type="button"
                className="text-grey-800 bg-yellow-400 hover:bg-yellow-300 font-semibold rounded-lg text-md px-4 py-2.5 text-center  items-center">   
                
                Logout
                
                </button>

            {/* <!-- Dropdown menu --> */}
            <div id="dropdown" className="overflow-visible z-50 block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
