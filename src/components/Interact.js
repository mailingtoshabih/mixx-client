import blueheart from '../assets/blueheart.png'
import copy from '../assets/duplicate.png'
import repost from '../assets/repost.png'
import redheart from '../assets/redheart.png'
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



    const [confirm, setConfirm] = useState("Delete");

    const deleteHandler = async () => {
  
        const res = await axios.delete(backend + `/api/posts/delete/${post?._id}`,
            { email: currentUser.email });
        res && setConfirm("Deleted");
    }


    // ------------------------------------------------------------------------


    return (
        <div>



            <div className='mt-4 flex justify-between '>

                <div className='flex'>


                    {isLiked ?
                        <img src={redheart} alt="heart" className='my-auto h-4' onClick={likeHandler}/>
                        :
                        <img src={blueheart} alt="heart" className='my-auto h-4' onClick={likeHandler} />
                    }


                    {/* likes counter */}
                    <p className='p-1 text-xs font-bold text-gray-500 my-auto mx-2'>
                        {likeCount} Likes
                    </p>
                </div>




                <div>
                    <button className='text-red-500 font-bold text-sm object-right'
                        onClick={deleteHandler}>
                        {
                            post?.email === currentUser.email &&
                            confirm
                        }
                    </button>
                </div>


            </div>





        </div>
    )
}
