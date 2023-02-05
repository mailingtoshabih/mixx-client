import shab from '../assets/person2.jpg'

import { Link } from 'react-router-dom';
import capitalize from "../ToTitle"
import { Interact } from './Interact'

// ------------------------------------------------------------------------

export const Post = ({ post, user }) => {

  const backend = process.env.REACT_APP_BACKEND_URL;


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
          {post?.username && capitalize(post.username)}
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
        {post?.image ?
          <>
            <img src={post.image} alt="PoST"
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
