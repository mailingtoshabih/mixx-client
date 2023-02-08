import avatar from '../assets/nopicture.png';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

// --------------------------------------------------------------------------






export const About = ({ user }) => {

    const backend = process.env.REACT_APP_BACKEND_URL;
    const { user: currentUser } = useContext(AuthContext);
    const [followStatus, setFollowStatus] = useState(false);


    useState( () => {
        const search = async () => {
            const res = await axios
                .get(backend + `/api/users/${user?.email}/isfollowing/${currentUser?.email}`); 
            
            res && setFollowStatus(res?.data);
        }
        search()
    },[currentUser, user?.email])

    
    const followHandler = async () => {
        
        try {
            if (followStatus) {
                const res1 = await axios.put(`${backend}/api/users/unfollow/${user.email}`,
                    { email: currentUser.email });
                res1 && setFollowStatus(false);
                
            }
            if (!followStatus) {
                const res2 = await axios.put(`${backend}/api/users/follow/${user.email}`,
                { email: currentUser.email });
                res2 && setFollowStatus(true);
            }
        }
        catch (exc) { console.log(exc.message) }
    }
    
    
    
    return (
        
        <div>


            <div className="drop-shadow-xl bg-white rounded-lg p-3 mb-4">

                {/* image */}
                <div>
                    <img src={user?.profilePicture ? user?.profilePicture : avatar} 
                    className="rounded-lg max-w-60" alt="" />

                    <h1 className='text-lg md:text-xl lg:text-2xl mx-auto font-semibold text-gray-700 mt-4'>
                        {user?.username?.toUpperCase()}
                    </h1>

                    <div className='text-md font-semibold my-2 text-purple-600'>
                        {user?.email}
                    </div>

                    {user?.username !== currentUser?.username &&
                        (
                            <button type="button"
                                className="text-white my-1 bg-gradient-to-r from-purple-500 to-purple-700 text-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                                onClick={followHandler}>
                                {
                                    followStatus ? "Unfollow" : "Follow"
                                }
                            </button>
                        )
                    }

                </div>

                {/* profile description */}
                <div className='text-xs md:text-md font-semibold my-2 text-gray-500'>

                </div>

            </div>



        </div>
    )
}
