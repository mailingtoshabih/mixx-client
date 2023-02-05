import { useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';


import logo from '../assets/logo.png';
import { loginCall } from "../Apicalls"
import { Link } from 'react-router-dom';







// ------------------------------------------------------------------------------

export const Login = () => {


    const email = useRef();
    const password = useRef();

    const { user, isFetching, error, dispatch } = useContext(AuthContext)


    const sign = (event) => {

        event.preventDefault();

        loginCall({
            email: email.current.value,
            password: password.current.value
        }, dispatch)
    }



    // -------------------------------------------------------------------------------

    return (
        <div className='bg-purple-100 md:flex justify-center'>




            {/* <div className='w-1/2 bg-red-100'>
                <img src="" alt="" />
            </div> */}



            <div className='w-1/2 backdrop-blur-xl'>

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
                                        className="bg-gray-100  outline-none  text-gray-900 sm:text-sm rounded-full block w-full p-2.5"
                                        ref={email} />
                                </div>


                                <div>
                                    <input type="password" name="password" id="password" placeholder="••••••••" required={true}
                                        minLength={"6"}
                                        className="bg-gray-100 outline-none text-gray-900 sm:text-sm rounded-full block w-full p-2.5 "
                                        ref={password} />
                                </div>


                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 rounded bg-gray-100" />
                                        </div>
                                        <div className="ml-3 text-sm text-gray-600">
                                            Remember me
                                        </div>
                                    </div>
                                    <a href="/" className="text-sm font-medium text-purple-600 hover:underline ">Forgot password?</a>
                                </div>

                                <button className="w-full text-white bg-purple-600 hover:bg-purple-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    onClick={sign}>
                                    Sign in
                                </button>


                                <div className="text-sm font-light text-gray-500 ">
                                    Don’t have an account yet?
                                    <Link to="/signup">
                                        <p className="font-medium text-purple-600 hover:underline ">Sign up</p>
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
