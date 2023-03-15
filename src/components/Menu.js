import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
// --------------------------------------------------



export const Menu = () => {

    const {user, dispatch} = useContext(AuthContext);

    return (
        <div className={`rounded-xl mt-10 md:hidden px-3 py-2 h-fit my-auto flex gap-16 items-center w-full overflow-y-auto scrollbar-hide font-semibold text-indigo-600`}>

            <Link to="/">
                <button className='my-auto'>Timeline</button>
            </Link>

            <Link to="/people">
                <button className='my-auto'>People</button>
            </Link>

            <Link to={`/profile/find/${user.email}`}>
                <button className='my-auto'>Profile</button>
            </Link>

            <Link to={`/people`}>
                <button className='my-auto'>Followers</button>
            </Link>
            
            <Link to={`/people`}>
                <button className='my-auto'>Followings</button>
            </Link>
            
            <button className='my-auto text-red-500'
                onClick={()=>dispatch( {type : "LOGOUT"})}
            >Logout</button>
            


        </div>
    )
}