import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

import { Followings } from './Followings';
import { Ads } from './Ads';



import person1 from "../assets/person1.jpg"
import person2 from "../assets/person2.jpg"
import person3 from "../assets/person3.jpg"




// ---------------------------------------------------------

export const Rightbar = () => {

  const { user, isFetching, error, dispatch } = useContext(AuthContext)








  return (

    <div className=' h-full max-h-screen hidden  lg:block w-1/4 rounded-lg shrink-0'>



      {/* Advertsement div */}
      {/* <div className='p-3 mb-4 rounded-lg w-full bg-white drop-shadow-lg'>

        <div className='flex justify-between'>
          <p className='text-sm font-bold text-gray-500 mb-2 my-auto'>Advertisements</p>
          <p className='text-xs font-bold text-gray-500 mb-2 my-auto'>Ads</p>
        </div>


        <div>
          <img className='rounded-lg' src={dell} alt="ads" />
        </div>


        <div className='my-2'>
          <p className='text-xs  text-gray-500 mb-2'>Dell laptops are designed with a touch screen and sturdy construction that makes it a favorite among college students, professional business people.</p>
        </div>

      </div> */}

      <Ads />





      {/* Followings div*/}
      <div className='mb-4 rounded-lg w-full bg-white drop-shadow-lg'>



        {/* map this */}
        <Followings h={60}/>



      </div>

    </div>




    // </div>
  )
}


//  suggesting people to follow
//  