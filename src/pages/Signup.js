import { AuthContext } from '../context/AuthContext';
import { useRef, useContext} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { loginCall } from "../Apicalls"


import logo from '../assets/logo.png';



// ------------------------------------------------



export const Signup = () => {

    const backend = process.env.REACT_APP_BACKEND_URL;
    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();


    const signup = async (event) => {

        event.preventDefault();

        if (password.current.value !== confirmPassword.current.value) {
            alert("Password doesn't match");
            // password.current.setCustomValidity("Passwords does not match");
        }
        else{
            const user = {
                username : username.current.value,
                email : email.current.value,
                password : password.current.value
            }
            try{
                const res = await axios.post( backend + "/api/auth/register", user);
                loginCall(user, dispatch);
            }catch(e){
                console.log(e.message)
            }
        }
    }

// --------------------------------







    return (
        <div className='bg-purple-100'>


            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <a href="/" className="flex items-center mb-6">
                    <img className="h-12 mr-2" src={logo} alt="logo" />
                </a>

                <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">

                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl  ">
                            Create an account
                        </h1>


                        <form className="space-y-4 md:space-y-6" action="#">

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900  ">Your name</label>
                                <input type="name"  className="bg-gray-100 text-gray-900 sm:text-sm rounded-full outline-none  block w-full p-2.5" placeholder="John" required={true}
                                    ref={username} />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900  ">Your email</label>
                                <input type="email" id="email" className="bg-gray-100 text-gray-900 sm:text-sm rounded-full  block w-full p-2.5 outline-none" placeholder="name@company.com" required={true}
                                    ref={email} />
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900  ">Password</label>
                                <input type="password" name="password" placeholder="•••••" className="bg-gray-100 text-gray-900 sm:text-sm outline-none rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required={true}
                                    ref={password} />
                            </div>


                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900  ">Confirm password</label>
                                <input type="password" placeholder="••••••" required={true} className="bg-gray-100 outline-none text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                minLength={"6"} 
                                ref={confirmPassword} />
                            </div>





                            <button type="submit" className="w-full text-white bg-purple-600 hover:bg-purple-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                onClick={signup}>
                                Create an account</button>



                            <div className="text-sm font-light text-gray-500 ">
                                Already have an account?
                                <Link to="/login">
                                    <p className="font-medium text-purple-600 hover:underline dark:text-primary-500">
                                        Login here
                                    </p>
                                </Link>
                            </div>

                        </form>


                    </div>
                </div>
            </div>



        </div>
    )
}
