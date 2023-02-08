import { AuthContext } from '../context/AuthContext';
import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Followee } from "./Followee";
import {User} from './User'

// ---------------------------------------------------------

export const Followings = ({h}) => {

    const backend = process.env.REACT_APP_BACKEND_URL;
    const { user } = useContext(AuthContext);
    const [followings, setFollowings] = useState([]);

    useEffect(() => {

        const getFollowings = async () => {
            const res = await axios.get(backend + `/api/users/followings/${user.email}`);
            setFollowings(res.data);
        }
        getFollowings();
    }, [user]);


// urgently remove right bar from profile


    return (

        <div className={`p-3 h-${h} shrink-0 overflow-auto scrollbar-hide shadow-md shadow-purple-200/50 rounded-lg`}>

            

            <div className='flex justify-between'>
                <p className='text-md font-semibold text-gray-600 my-auto mb-2'>Your Followings</p>
                <p className='text-sm font-bold text-indigo-500  my-auto'>
                    {followings?.length}
                </p>
            </div>


            {
                followings?.length > 0 ?
                    (
                        followings.map((follower) => (
                            // <Followee key={f._id} followee={f} />
                            <User otheruser={follower} key={follower._id}/>
                        ))
                    )
                    :
                    <div className="p-5 my-5 text-sm font-semibold text-gray-500">
                        <p className="w-fit text-center">You are not following anyone yet...</p>
                    </div>
            }

        </div>
    )
}
