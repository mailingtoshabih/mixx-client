import avatar from "../assets/nopicture.png"
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom"
import capitalize from "../ToTitle"


export const Followee = ({ otheruser }) => {
    



    




    return (
        <>
            <div className='flex my-2  rounded-lg hover:bg-gray-100 p-1'>
                <Link to={`/profile/find/${otheruser.email}`}>
                    <img className='h-9 lg:h-12  my-auto rounded-lg' 
                    //  src={followee.profilePic ? followee.profilePicture : avatar}
                     alt="" />
                </Link>

                <div className='text-xs  font-semibold my-auto mx-4 text-gray-600'>
                    {/* {capitalize(otheruser.username)} */}
                </div>
            </div>
        </>
    )
}
