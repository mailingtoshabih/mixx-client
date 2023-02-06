

import axios from 'axios';
import { useState, useEffect } from 'react';
import { User } from "./User";




// ---------------------------------------------------------------


export const Around = ({ user }) => {

    const backend = process.env.REACT_APP_BACKEND_URL;
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get(backend + "/api/users/all");
                res && setUsers(res.data);
            }
            catch (exc) { }
        }
        getUsers();
    }, [user])


    return (
        <>
            <div className='rounded-lg bg-white drop-shadow-lg p-3 h-60 overflow-x-hidden scrollbar-hide'>

                <div className='text-sm font-bold my-auto text-gray-600 mb-3'>Around You</div>


                {/* map recent activities here */}
                <div>
                    {
                        users?.map((user) => (
                            <User pic={user?.profilePicture} name={user?.username} key={user?.email}/>
                        ))
                    }
                </div>


            </div>

        </>
    )
}

// {
//     posts?.map( (post) =>
//     ( <Post key={post._id} post={post}/> )
//     )
// }