import { Upload } from './Upload';
import { Post } from './Post';
import axios from "axios";
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// -------------------------------------------------


export const Feed = () => {
    const backend = process.env.REACT_APP_BACKEND_URL;

    const [posts, setPosts] = useState([]);
    const { user, isFetching, error, dispatch } = useContext(AuthContext)


    useEffect(() => {

        const fetchPosts = async () => {
            const res = await axios.get(backend + '/api/posts');
            setPosts(res.data.reverse());
        }

        fetchPosts();
    }, [user?.email]
    );

    


    return (

        <div className='w-full  
            md:w-3/4 lg:w-2/4  rounded-lg p-3 my-1'>


            <Upload />

            {
                posts?.map( (post) => 
                ( <Post key={post._id} post={post}/> )
                )
            }



        </div>
    )
}




