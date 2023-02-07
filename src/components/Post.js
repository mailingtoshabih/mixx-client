import avatar from '../assets/nopicture.png'
import { Link } from 'react-router-dom';
import capitalize from "../ToTitle"
import { Interact } from './Interact'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// ------------------------------------------------------------------------

export const Post = ({ post }) => {

  const backend = process.env.REACT_APP_BACKEND_URL;
  const { user } = useContext(AuthContext);


  return (

    <div className='mb-5 w-full bg-white rounded-lg p-2 md:p-4 shadow-md shadow-green-200/50'>



      {/* Profile pic and name */}
      <div className="flex justify-start gap-3 rounded-lg h-1/4 my-auto">

        <div className="flex-none">

          <Link to={`/profile/find/${post?.email}`}>
            <img src={post.profilePicture || avatar} className="h-12 m-1 rounded-full " alt="profilepic" />
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
            <img src={post.image} alt=""
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
