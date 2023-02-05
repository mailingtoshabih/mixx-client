import person1 from "../assets/person1.jpg"

import { Link } from "react-router-dom"
import capitalize from "../ToTitle"


export const Followee = ({ followee }) => {

    return (
        <>
            <div className='flex my-2  rounded-lg'>
                <Link to={`/profile/find/${followee.email}`}>
                    <img className='h-9 lg:h-12  my-auto rounded-full' src={person1} alt="linkedin" />
                </Link>
                <div className='text-sm  font-semibold my-auto mx-4 text-gray-600'>
                    {capitalize(followee.username)}
                </div>
            </div>
        </>
    )
}
