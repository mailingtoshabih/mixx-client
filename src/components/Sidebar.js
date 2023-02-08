import avatar from '../assets/nopicture.png'
import loc from "../assets/loc.png"
import briefcase from "../assets/briefcase.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"

import capitalize from "../ToTitle"
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Around } from './Around'
import { Metadata } from './Metadata'





// ----------------------------------------------------
export const Sidebar = () => {




  const { user } = useContext(AuthContext)



  return (


    <div className='rounded-lg hidden md:block md:w-1/4 drop-shadow-sm shrink-0 
      h-screen max-h-screen my-4'>



      {/* About me div */}
      <div className='flex-none rounded-lg bg-white mb-4 shadow-md shadow-purple-200/50 p-3'>

        {/* Profile pic and name div */}
        <div className="flex justify-start rounded-lg h-1/4 my-auto">

          <Link to={`/profile/find/${user.email}`}
            className="flex-none">
            <img className="h-12 m-1 rounded-full" alt=""
              src={user.profilePicture ? user.profilePicture : avatar} />
          </Link>

          <p className='text-sm my-auto mx-2 font-bold text-gray-700'>
            {capitalize(user.username)}
          </p>

        </div>


        <hr className='w-3/4 mx-auto my-3' />


        {/* location and work */}
        <div className='mt-4'>

          <div className='flex my-2'>
            <img className='h-5 my-auto' src={loc} alt="location" />

            <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>
              Somewhere on {user.city}
            </div>
          </div>

          <div className='flex'>
            <img className='h-5 my-auto' src={briefcase} alt="location" />
            <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>Working as a human</div>
          </div>

        </div>
        <hr className='w-3/4 mx-auto my-3' />


        {/* Social profiles */}
        <div>

          <div className='text-sm font-bold my-auto text-gray-600'>Social Profiles</div>

          <div className='flex my-2'>
            <img className='h-5 my-auto' src={linkedin} alt="linkedin" />
            <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>Linkedin</div>
          </div>
          <div className='flex'>
            <img className='h-5 my-auto' src={twitter} alt="twitter" />
            <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>Twitter</div>
          </div>

        </div>

      </div>




      <div className='flex-none mb-4 shrink-0'>
        <Around user={user} h={60} />
      </div>

      <Metadata />


    </div>

  )
}
