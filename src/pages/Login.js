import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

import bg from '../assets/registerbg.png'
import logo from '../assets/logo.png';
import { loginCall } from "../Apicalls"
import { Link } from 'react-router-dom';







// ------------------------------------------------------------------------------

export const Login = () => {

    const email = useRef();
    const password = useRef();

    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const [signButton, setSignButton] = useState("Sign In");

    const sign = async (event) => {

        event.preventDefault();
        setSignButton("Loading");

        await loginCall({
            email: email.current.value,
            password: password.current.value
        }, dispatch);
    }



    // -------------------------------------------------------------------------------

    return (
        <div className='bg-gradient-to-r from-white via-red-100 to-white h-screen'>
            <div className='md:w-1/2 m-auto '>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">


                    <a href="/" className="flex items-center mb-6">
                        <img className="h-12 mr-2" src={logo} alt="logo" />
                    </a>



                    <div className="w-full rounded-xl md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">


                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl  ">
                                Sign in to your account
                            </h1>


                            <div className="space-y-4 md:space-y-6">

                                <div>
                                    <input type="email" name="email" id="email" placeholder="name@company.com" required={true}
                                        className="outline-none  text-gray-900 sm:text-sm rounded-full block w-full p-2.5"
                                        ref={email} />
                                </div>


                                <div>
                                    <input type="password" name="password" id="password" placeholder="••••••••" required={true}
                                        minLength={"6"}
                                        className="outline-none text-gray-900 sm:text-sm rounded-full block w-full p-2.5 "
                                        ref={password} />
                                </div>


                                <button 
                                    className="w-full text-white shadow-xl shadow-purple-500/50 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    onClick={sign}>
                                    
                                    {signButton}
    
                                </button>


                                <div className="flex justify-between text-sm font-light text-gray-500 ">
                                    Don’t have an account yet?
                                    <Link to="/signup">
                                        <p className="font-medium text-indigo-600">Sign Up</p>
                                    </Link>
                                </div>

                            </div>



                        </div>
                    </div>

                    
                </div>
                

            </div>


















        </div>
    )
}
