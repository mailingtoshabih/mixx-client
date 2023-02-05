import blueheart from '../assets/blueheart.png'
import redheart from '../assets/redheart.png'
import commenticon from '../assets/commenticon.png'
import shareicon from '../assets/share.png'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';



// -------------------------------------------------------------------------

export const Interact = ({ post }) => {
    const backend = process.env.REACT_APP_BACKEND_URL;
    const { user: currentUser } = useContext(AuthContext);   //current user


    const [isLiked, setIsLiked] = useState(false);                           //changing heart
    const [likeCount, setLikeCount] = useState(post.likes.length);          // changing count




    const likeHandler = async () => {

        await axios.put(backend + `/api/posts/like/${post._id}`, { email: currentUser.email });

        if (isLiked) {
            setIsLiked(false);
            setLikeCount(likeCount - 1);
        } else {
            setIsLiked(true);
            setLikeCount(likeCount + 1);
        }
    }


    useEffect(() => {      //this effect puts redheart if post is already liked.

        const checkLike = async () => {

            const res = post.likes.includes(currentUser.email);
            res ? setIsLiked(true) : setIsLiked(false);
        }
        checkLike();
    }, [post, currentUser])











    return (
        <div>



            <div className='flex justify-evenly mt-5'>


                <div className='flex'>


                    {isLiked ?
                        <img src={redheart} alt="heart" className='my-auto h-4' onClick={likeHandler} />
                        :
                        <img src={blueheart} alt="heart" className='my-auto h-4' onClick={likeHandler} />
                    }


                    {/* likes counter */}
                    <p className='p-1 text-xs font-bold text-gray-500 my-auto mx-2'>
                        {likeCount}
                    </p>
                </div>

                {/* <div className='flex'>
                    <img src={redheart} alt="heart" className='my-auto h-4' />
                    <p className='p-1 text-xs font-bold text-gray-500 my-auto'>98</p>
                    </div> */}

                <div className='flex'>
                    <img src={commenticon} alt="heart" className='my-auto h-4' />
                    <p className='p-1 text-xs font-bold text-gray-500 my-auto mx-2'>123</p>
                </div>

                <div className='flex'>
                    <img src={shareicon} alt="heart" className='my-auto h-4' />
                </div>



            </div>



        </div>
    )
}
