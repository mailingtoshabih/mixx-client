
import person2 from "../assets/person2.jpg"
import person3 from "../assets/person3.jpg"
import person4 from "../assets/person4.jpg"

import { AuthContext } from '../context/AuthContext';
import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Followee } from "./Followee";


// ---------------------------------------------------------

export const Followings = () => {
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



        <div className="p-4 h-96 shrink-0 overflow-auto scrollbar-hide bg-white drop-shadow-lg rounded-lg">

            <div className='flex justify-between'>
                <p className='text-md font-bold text-gray-700 my-auto mb-2'>Your Followings</p>
                <p className='text-sm font-bold text-indigo-500  my-auto'>
                    {followings?.length}
                </p>
            </div>


            {
                followings.length > 0 ?
                    (
                        followings.map((f) => (
                            <Followee key={f._id} followee={f} />
                        ))
                    )
                    :
                    <div className="w-fit mx-auto my-14 text-xs font-semibold text-gray-500">
                        Not following anyone yet...
                    </div>
            }

        </div>
    )
}
