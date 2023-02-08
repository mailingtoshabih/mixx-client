import axios from 'axios';
import { useState, useEffect } from 'react';
import { User } from "./User";




// ---------------------------------------------------------------


export const Around = ({ user, h }) => {

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
            <div className={`rounded-lg shadow-md shadow-purple-200/50 p-3 h-${h} overflow-x-hidden scrollbar-hide`}>
                
                <div className='text-md font-bold my-auto text-gray-700 mb-3'>Around You</div>


                {/* map recent activities here */}
                <div>
                    {
                        users?.map((user) => (

                            <User otheruser = {user} key={user._id}/>
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