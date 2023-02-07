import axios from 'axios';




export const loginCall = async (userCredentials, dispatch) => {

    const backend = process.env.REACT_APP_BACKEND_URL;
    
    dispatch( {type : "LOGIN_START"});
    
    try{
        const res = await axios.post(`${backend}/api/auth/login`, userCredentials);
        dispatch( { type : "LOGIN_SUCCESS", payload:res.data } );
    }
    catch(exc){
        dispatch( {type : "LOGIN_FAILURE", payload : exc.message})
    }
}


