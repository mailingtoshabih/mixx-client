import { Followings } from './Followings';
import { Ads } from './Ads';




// ---------------------------------------------------------

export const Rightbar = () => {



  return (

    <div className=' h-full max-h-screen hidden  lg:block w-1/4 rounded-lg shrink-0'>


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