import shab from '../assets/shab.jpg'
import picicon from '../assets/picicon.png'
import videoicon from '../assets/videoicon.png'
import audioicon from '../assets/audioicon.png'
import clipicon from '../assets/clipicon.png'

import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext, useRef } from 'react'

import axios from 'axios'

import { loginCall } from "../Apicalls"





// ---------------------------------------------------------------------------
export const Upload = () => {
    const backend = process.env.REACT_APP_BACKEND_URL;
    const { user } = useContext(AuthContext);
    const description = useRef();                               //post description
    const [file, setFile] = useState(null);



    const shareHandler = async (e) => {

        e.preventDefault();

        const newPost = {
            username: user?.username,
            email: user?.email,
            description: description?.current.value
        }

        if (file) {
            const fileName = file.name;

            newPost.image = fileName;

            let formdata = new FormData();
            formdata.append("name", fileName);
            formdata.append("file", file);

            try {
                await axios.post(backend + "/api/upload", formdata);

            } catch (exc) {
                console.log(exc.message);
            }
        }

        if (file || description.current.value) {
            try {
                const res = await axios.post(backend + '/api/posts', newPost);
            }
            catch (exc) {
                console.log(exc.message);
            }
        }
    }





    const uploadBar = (event) => {
        setFile(event.target.files[0]);
    }


    // --------------------------------------------------------------

    return (
        <div className='bg-white w-full rounded-lg p-4 drop-shadow-md mb-4'>


            {/* Profile pic and write article section */}
            <div className='flex justify-start'>

                <div className='w-2/12 my-auto mx-1'>
                    <Link to={`/profile/find/${user.email}`} className="flex-none">
                        <img src={shab} className="h-12  rounded-full" alt="profilepic" />
                    </Link>
                </div>


                <div className='w-10/12 mx-1'>

                    <input type="text" id="default-input" className="bg-gray-100 h-full outline-none text-gray-900 text-xs rounded-full block w-full py-2.5 px-4 focus-none" autoComplete='off'
                        placeholder="What's on your mind..." spellCheck="false"
                        ref={description}
                    />
                </div>

            </div>

            <hr className='w-11/12 mx-auto my-3 ' />


            {/* button to upload */}
            <form action="" encType="multipart/form-data" onSubmit={shareHandler} >

                {
                    file ?
                        <div className='flex  my-2'>
                            <img src={URL.createObjectURL(file)} alt=""
                                className='w-1/3 inline rounded-lg' />

                            <button className="text-red-400 font-bold h-fit m-auto"
                                onClick={() => { setFile(null) }}>
                                Discard
                            </button>
                        </div>
                        :
                        ""
                }

                <div className={`${file ? "flex" : "flex"} justify-evenly mt-5`}>

                    <label htmlFor='file'>
                        <img src={picicon} className="h-6 mx-auto" alt="profilepic" />
                        <p className='text-xs text-gray-500 font-semibold'>Image</p>
                        <input type="file"  id='file' accept="image/*" className='hidden'
                            onChange={uploadBar} />
                    </label>
                    <label htmlFor='file'>
                        <img src={videoicon} className="h-6 mx-auto" alt="profilepic" />
                        <p className='text-xs text-gray-500 font-semibold'>Records</p>
                    </label>
                    <label htmlFor='file'>
                        <img src={audioicon} className="h-6 mx-auto" alt="profilepic" />
                        <p className='text-xs text-gray-500 font-semibold'>Audio</p>
                    </label>
                    <label htmlFor='file'>
                        <img src={clipicon} className="h-6 mx-auto" alt="profilepic" />
                        <p className='text-xs text-gray-500 font-semibold'>Files</p>
                    </label>

                    <button className={`bg-orange-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full`} 
                        type='submit'>

                        Share
                    </button>


                    {/* onClick={shareHandler} */}
                </div>

            </form>





        </div>
    )
}
