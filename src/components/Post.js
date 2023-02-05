import shab from '../assets/person2.jpg'

import { Link } from 'react-router-dom';
import capitalize from "../ToTitle"
import { Interact } from './Interact'

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

// ------------------------------------------------------------------------

export const Post = ({ post, user }) => {



  return (

    <div className='mb-3 w-full bg-white rounded-lg p-4 drop-shadow-lg'>



      {/* Profile pic and name */}
      <div className="flex justify-start rounded-lg h-1/4 my-auto">

        <div  className="flex-none">

          <Link>
            <img src={shab} className="h-12 m-1 rounded-full " alt="profilepic" />
          </Link>
          
        </div>
        <div className='text-md my-auto mx-2 font-bold text-gray-700'>
          {user?.username ? capitalize(user.username) : post?.email?.toUpperCase()}
        </div>

      </div>



      {/* description > if available */}
      <div className='my-4'>
        {
          post.description ?
            <p className='text-sm font-semibold my-2 text-gray-500'>
              {post.description}
            </p>
            :
            <div></div>
        }
      </div>



      {/* post image > if available */}
      <div>
        {post.image ?
          <>
            <img src={`http://localhost:3001/images/${post.image}`} alt="PoST"
              className='my-auto w-full rounded-lg object-scale-down' />
          </>
          :
          <></>
        }
      </div>




      {/* Like comment and counter */}
      <Interact post={post} />

    </div>
  )
}
