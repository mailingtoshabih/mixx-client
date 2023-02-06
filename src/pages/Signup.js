import { AuthContext } from '../context/AuthContext';
import { useRef, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { loginCall } from "../Apicalls"
// -----------------------------------------------
import logo from '../assets/logo.png';
import bg from '../assets/registerbg.png';
import nopicture from '../assets/nopicture.png';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


// ------------------------------------------------



export const Signup = () => {

    const backend = process.env.REACT_APP_BACKEND_URL;
    const { dispatch } = useContext(AuthContext);

    const [signupButton, setSignupButton] = useState("Create an account");

    const username = useRef();
    const email = useRef();
    const password = useRef();

    const [pic, setPic] = useState(null);
    const uploadPic = (event) => {
        setPic(event.target.files[0]);
    }



    const signup = async (event) => {
        event.preventDefault();
        setSignupButton("Loading");

        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
        }

        if (pic) {
            try {
                const fileName = Date.now() + pic.name;
                const imageRef = ref(storage, `profilepic/${fileName}`);
                const isUploaded = await uploadBytes(imageRef, pic);

                isUploaded && console.log("Profil pic Uploaded...");

                const imgUrl = await getDownloadURL(imageRef);
                user.profilePicture = imgUrl;
            }
            catch (exc) {console.log(exc.message)}
        }


        try {
            const res = await axios.post(backend + "/api/auth/register", user);
            await loginCall(user, dispatch);
        } catch (e) {
            console.log(e.message)
        }
        setSignupButton("Create an account");

    }






    // ---------------------------------------------------



    return (
        <div className='bg-gradient-to-r from-white via-red-100 to-white h-screen justify-center py-5'>
            <div className='flex rounded-xl  bg-gradient-to-r from-white via-red-100 m-auto md:backdrop-blur-lg'>
                <div className="w-full lg:w-2/4 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">



                    <a href="/" className="flex items-center">
                        <img className="h-12 mr-2 " src={logo} alt="logo" />
                    </a>




                    <div className="w-full rounded-lg">

                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                            {/* set profile */}
                            <div>
                                <div className='w-fit mx-auto'>

                                    <p className='text-xs text-gray-500 font-semibold mx-auto w-fit'>Set a profile picture</p>

                                    <label htmlFor='file'>
                                        <img
                                            src={pic ? URL.createObjectURL(pic) : nopicture}
                                            className="mx-auto h-28 my-5 rounded-lg" alt="" />

                                        <input type="file" id='file' accept="image/*"
                                            className='hidden'
                                            onChange={uploadPic} />
                                    </label>

                                    <button className={`${pic ? "block" : "hidden"} text-xs text-red-400 font-semibold mx-auto w-fit`}
                                        onClick={() => setPic(null)}
                                    >
                                        Cancel
                                    </button>

                                </div>
                            </div>






                            <form className="space-y-4 md:space-y-6" action="#">

                                <div>
                                    <label htmlFor="email" className='text-xs text-gray-500 font-semibold'>Your name</label>
                                    <input type="name" className=" text-gray-900 sm:text-sm rounded-full outline-none  block w-full p-2.5" placeholder="John" required={true}
                                        ref={username} />
                                </div>

                                <div>
                                    <label htmlFor="email" className='text-xs text-gray-500 font-semibold'>Your email</label>
                                    <input type="email" id="email" autoComplete='false' className=" text-gray-900 sm:text-sm rounded-full  block w-full p-2.5 outline-none" placeholder="name@company.com" required={true}
                                        ref={email} />
                                </div>

                                <div>
                                    <label htmlFor="password" className='text-xs text-gray-500 font-semibold'>Password</label>
                                    <input type="password" name="password" placeholder="•••••" className=" text-gray-900 sm:text-sm outline-none rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required={true}
                                        ref={password} />
                                </div>






                                <button type="submit"
                                    className="w-full text-white shadow-xl shadow-green-300/50 bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                    onClick={signup}>
                                    {signupButton}
                                </button>



                                <div className="flex justify-between text-sm font-light text-gray-500 ">
                                    Already have an account ?
                                    <Link to="/login">
                                        <p className="font-medium text-indigo-600">
                                            Login here
                                        </p>
                                    </Link>
                                </div>

                            </form>


                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
