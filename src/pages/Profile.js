import loc from "../assets/loc.png"
import briefcase from "../assets/briefcase.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import avatar from "../assets/avatar.png"


import { Navbar } from "../components/Nav";
import { Followings } from "../components/Followings";
import { Metadata } from "../components/Metadata";
import { Post } from "../components/Post";
import { Ads } from "../components/Ads";
import { About } from "../components/About";
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";


// ---------------------------------------------


export const Profile = () => {


    const backend = process.env.REACT_APP_BACKEND_URL;


    const params = useParams();

    const [user, setUser] = useState({});
    const [myposts, setMyPosts] = useState([]);


    useEffect(() => {

        const fetchPosts = async () => {

            try {
                const userRes = await axios.get(backend + `/api/users/find/${params.email}`);
                setUser(userRes.data[0]);

                const postRes = await axios.get(backend + `/api/posts/${params.email}`);
                setMyPosts(postRes.data.reverse());
            }
            catch (exc) {
                console.log(exc.message);
            }
        }
        fetchPosts();

    }, []    //try empty array
    )


    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);



    return (
        <>
            <Navbar />

            <div className="w-full md:flex justify-between max-w-7xl mx-auto p-1 md:p-5">

                {/* left section  my profile*/}
                <div className="hidden md:block w-1/4 rounded-lg shrink-0">

                    {/* about me */}
                    <About user={user} key={user._id} />



                    {/* location social and  */}
                    <div className=' rounded-lg bg-white mb-4  drop-shadow-lg p-3'>

                        {/* location and work */}
                        <div className='mt-1'>

                            <div className='flex my-2'>
                                <img className='h-5 my-auto' src={loc} alt="location" />
                                <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>
                                    Somewhere in {user.city}
                                </div>
                            </div>
                            <div className='flex my-2'>
                                <img className='h-5 my-auto' src={briefcase} alt="location" />
                                <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>Web Developer</div>
                            </div>
                            <div className='flex my-2'>
                                <img className='h-5 my-auto' src={avatar} alt="" />
                                <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>Age 23, Single</div>
                            </div>

                        </div>
                        <hr className='w-3/4 mx-auto my-3' />


                        {/* Social profiles */}
                        <div>

                            <div className="flex justify-between">
                                <p className='text-sm font-bold my-auto text-gray-600'>Social Profiles</p>
                                <p className="text-xs font-semibold my-auto text-indigo-500">Add</p>
                            </div>

                            <div className='flex my-2'>
                                <img className='h-5 my-auto' src={linkedin} alt="linkedin" />
                                <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>Linkedin</div>
                            </div>
                            <div className='flex'>
                                <img className='h-5 my-auto' src={twitter} alt="twitter" />
                                <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>Twitter</div>
                            </div>

                        </div>

                    </div>



                    {/* profile all metadata */}
                    <Metadata />

                </div>




                {/* my posts - mid section*/}
                <div className="w-full md:w-3/4 lg:w-2/4 h-fit  mx-auto md:mx-2 
                    rounded-lg overflow-y-auto scrollbar-hide">


                    {/* about me */}
                    <div className="block md:hidden">
                        <About user={user} />
                    </div>


                    {
                        myposts.length > 0 ?
                            (
                                myposts.map((post) => (
                                    <Post key={post._id} post={post} user={user} />
                                ))
                            )
                            :
                            <div className="w-fit mx-auto my-64 text-xs font-semibold text-gray-500">
                                Not posted anything yet...
                            </div>
                    }
                </div>




                {/*right */}
                <div className="md:w-1/4 hidden lg:block rounded-lg shrink-0">
                    {/* <Followings /> */}
                    <Ads />
                    <Ads />
                </div>

            </div>


        </>
    )
}






//             {/* suggested peoples */}
