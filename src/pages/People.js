import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navbar } from '../components/Nav';

import { Around } from '../components/Around';
import { Followings } from '../components/Followings';
import { Followers } from '../components/Followers';



export const People = () => {

    const { user } = useContext(AuthContext);

    const [peopleNav, setPeopleNav] = useState("Around");




    return (
        <div>
            <Navbar />

            {/* People Nav */}
            <div className='flex p-5 text-sm font-semibold text-indigo-600 justify-evenly border-y w-full md:w-3/4 mt-10 md:mt-16 mx-auto max-w-7xl'>


                <button className='hover:text-purple-600'
                    onClick={() => setPeopleNav("Around")}>
                    Around You
                </button>


                <button className='hover:text-purple-600'
                    onClick={() => setPeopleNav("Followers")}>
                    Your Followers
                </button>


                <button className='hover:text-purple-600'
                    onClick={() => setPeopleNav("Followings")}>
                    Your Followings
                </button>
            </div>





            {/* Screen */}
            <div className='p-5 text-sm font-semibold text-gray-600 w-full md:w-3/4 mt-2 mx-auto max-w-7xl'>


                <div className={` 
                    ${peopleNav === "Around" ? "block" : "hidden"}`}>

                    <Around user={user} />
                </div>



                <div className={` 
                    ${peopleNav === "Followers" ? "block" : "hidden"}`}>

                    <Followers h={"full"} user={user} />
                </div>



                <div className={` 
                            ${peopleNav === "Followings" ? "block" : "hidden"}`}>
                    <Followings h={"full"} user={user} key={user._id}/>
                </div>



            </div>



        </div>

    )
}
