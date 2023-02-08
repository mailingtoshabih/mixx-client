import capitalize from "../ToTitle";
import avatar from "../assets/nopicture.png"
import { AuthContext } from '../context/AuthContext';
import { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";



// --------------------------------------------------------------





export const User = ({ otheruser }) => {

    const backend = process.env.REACT_APP_BACKEND_URL;
    const { user } = useContext(AuthContext);
    const [followStatus, setFollowStatus] = useState(false);
    

    useState(() => {
        const search = async () => {
            const res = await axios
                .get(backend + `/api/users/${otheruser?.email}/isfollowing/${user?.email}`);

            res && setFollowStatus(res?.data);
        }
        search()
    }, [user, otheruser?.email])


    const followHandler = async () => {
        try {
            if (followStatus) {
                const res1 = await axios.put(`${backend}/api/users/unfollow/${otheruser?.email}`,
                    { email: user.email });
                res1 && setFollowStatus(false);

            }
            if (!followStatus) {
                const res2 = await axios.put(`${backend}/api/users/follow/${otheruser?.email}`,
                    { email: user.email });
                res2 && setFollowStatus(true);
            }
        }
        catch (exc) { console.log(exc.message) }
    }



    return (
        <>


            <div className='p-1 rounded-lg flex justify-between my-4 font-semibold text-xs hover:bg-gray-100'>
                <div className="flex ">

                    <Link to={`/profile/find/${otheruser?.email}`}>
                        <img className='object-contain h-12 w-12 my-auto rounded-lg'
                            src={otheruser?.profilePicture ? otheruser.profilePicture : avatar} alt="" />
                    </Link>


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
                        <button className="rounded-md p-2 text-indigo-600 mx-2 hover:text-white hover:bg-indigo-500"
                            onClick={followHandler}>

                            {followStatus ? "Unfollow" : "Follow"}
                        </button>
                    }
                </div>

            </div>


        </>
    )
}



