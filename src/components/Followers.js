import {User} from './User';
import { useEffect, useState } from 'react';
import axios from 'axios';



// i am follower's child
// ----------------------------------------------------------------------------
export const Followers = ({user,h}) => {

    const backend = process.env.REACT_APP_BACKEND_URL;


    const [followersList, setFollowersList] = useState([]);
   
    useEffect( () => {
        
    const search = async () => { 
        const res = await axios.get(backend + `/api/users/followers/${user?.email}`);
        res && setFollowersList(res.data);
    }
    search();

   },[user] )

    

    return (
        <div>



            <div className={`rounded-lg shadow-md shadow-purple-200/50 p-3 h-${h} overflow-x-hidden scrollbar-hide`}>

                <div className='text-md font-bold my-auto text-gray-700 mb-3'>Followers</div>


                {/* map recent activities here */}
                <div>
                    {
                        followersList?.length > 0 ?
                        (
                            followersList.map( (follower) => (
                                
                                <User otheruser={follower} key={follower._id} />
                                // <Followee otheruser={u}/>
                                
                                ))
                        )
                        :
                        <div className='h-60 text-sm font-semibold text-gray-500'>
                            <p className='mt-10 w-fit my-auto'>You don't have any followers yet...</p>
                        </div>
                    }
                </div>


            </div>




        </div>
    )
}
