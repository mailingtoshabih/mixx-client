import shab from '../assets/shab.jpg'
import loc from "../assets/loc.png"
import briefcase from "../assets/briefcase.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import person1 from "../assets/person1.jpg"
import person2 from "../assets/person2.jpg"
import person3 from "../assets/person3.jpg"
import person4 from "../assets/person4.jpg"

import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react'
import {Link} from 'react-router-dom';




// ----------------------------------------------------
export const Sidebar = () => {




  const { user } = useContext(AuthContext)



  return (


    <div className='rounded-lg hidden md:block md:w-1/4 drop-shadow-sm shrink-0 
      h-screen max-h-screen my-4'>



      {/* About me div */}
      <div className=' rounded-lg bg-white mb-4  drop-shadow-lg p-3'>

        {/* Profile pic and name div */}
        <div className="flex justify-start rounded-lg h-1/4 my-auto">

          <Link to={`/profile/find/${user.email}`}
            className="flex-none">
            <img className="h-12 m-1 rounded-full" alt="profilepic"
              src={shab} />
          </Link>

          <div className='text-md my-auto mx-2 font-bold text-gray-700'>
            {user.username.toUpperCase()}
          </div>

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





      {/* Recent activity div */}
      <div className='rounded-lg bg-white mb-4 drop-shadow-lg p-3 h-96 '>

        {/* recent data */}
        <div>

          <div className='text-sm font-bold my-auto text-gray-600'>Recents</div>

          {/* map recent activities here */}
          <div>
            <div className='flex my-2'>
              <img className='h-9  my-auto rounded-full border-2 border-yellow-400' src={person1} alt="linkedin" />
              <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>Bonnie liked your post</div>
            </div>

            <div className='flex my-2'>
              <img className='h-9 my-auto rounded-full border-2 border-yellow-400' src={person2} alt="linkedin" />
              <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>John sent a request</div>
            </div>

            <div className='flex my-2'>
              <img className='h-9 my-auto rounded-full border-2 border-yellow-400' src={person3} alt="linkedin" />
              <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>You liked Michael's post</div>
            </div>

            <div className='flex my-2'>
              <img className='h-9 my-auto rounded-full border-2 border-yellow-400' src={person4} alt="linkedin" />
              <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>You sent a request to Michael</div>
            </div>

            <div className='flex my-2'>
              <img className='h-9  my-auto rounded-full border-2 border-yellow-400' src={person1} alt="linkedin" />
              <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>Bonnie liked your post</div>
            </div>

            <div className='flex my-2'>
              <img className='h-9 my-auto rounded-full border-2 border-yellow-400' src={person2} alt="linkedin" />
              <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>John sent a request</div>
            </div>

            <div className='flex my-2'>
              <img className='h-9 my-auto rounded-full border-2 border-yellow-400' src={person3} alt="linkedin" />
              <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>You liked Michael's post</div>
            </div>


          </div>
        </div>



      </div>




      {/* Profile metadata */}
      <div className='rounded-lg bg-white mb-3 drop-shadow-lg p-4'>

        {/* profile metadata > who viewed your profile */}
        <div>

          <div className='text-sm font-bold my-auto text-gray-600'>Activities</div>

          <div className='flex justify-between my-2'>
            <div className='text-xs font-semibold my-auto  text-gray-500'>Who's viewed your profile</div>
            <div className='text-xs font-semibold my-auto  text-indigo-500'>53</div>
          </div>

          <div className='flex justify-between my-2'>
            <div className='text-xs font-semibold my-auto  text-gray-500'>Your Followers</div>
            <div className='text-xs font-semibold my-auto  text-indigo-500'>3443</div>
          </div>

        </div>

      </div>


    </div>

  )
}
