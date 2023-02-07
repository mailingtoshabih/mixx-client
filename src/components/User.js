import capitalize from "../ToTitle";
import avatar from "../assets/nopicture.png"
import { AuthContext } from '../context/AuthContext';
import { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";



// --------------------------------------------------------------




export const User = ({ otheruser }) => {

    const backend = process.env.REACT_APP_BACKEND_URL;
    const { user } = useContext(AuthContext)
    const [followStatus, setFollowStatus] = useState(user.followers.includes(otheruser?.email));


    const followHandler = async () => {

        setFollowStatus(!followStatus);
        // const res = await axios.put(backend + `/api/users/follow/${otheruser?.email}`, 
        // {email : user.email});
        // res && console.log(res.data)
    }



    return (
        <>
            <Link to={`/profile/find/${otheruser?.email}`}>

                <div className='p-1 rounded-lg flex justify-between my-4 font-semibold text-xs hover:bg-gray-100'>
                    <div className="flex ">

                        <img className='object-contain h-12 my-auto rounded-lg'
                            src={otheruser?.profilePicture ? otheruser.profilePicture : avatar} alt="" />


                        <div className='my-auto mx-2 text-gray-600'>
                            <div>
                                {capitalize(otheruser?.username)}
                            </div>

                            <div className="text-indigo-600">
                                {otheruser?.followers?.length} Followers
                            </div>
                        </div>
                    </div>

                    <div className="my-auto">
                        {
                            user.email !== otheruser?.email &&
                            <button className="text-indigo-600 mx-2" onClick={followHandler}>
                                {/* {followStatus ? "Unfollow" : "Follow"} */}
                            </button>
                        }
                    </div>

                </div>

            </Link>
        </>
    )
}



