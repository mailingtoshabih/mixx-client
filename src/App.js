import { AuthContext } from './context/AuthContext';  //all states are here
import { useContext } from 'react';

import { Homepage } from './pages/Homepage';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Signup } from './pages/Signup';
import { ErrorPage } from './pages/ErrorPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// ---------------------------------------------------------

function App() {


  const {user} = useContext(AuthContext);

  const router = createBrowserRouter([

    {
      path: "/login",
      element: user ? <Homepage/> : <Login/>,
      errorElement : <ErrorPage/>
    },
    {
      path: "/signup",
      element: user ? <Homepage/> : <Signup/>,
      errorElement : <ErrorPage/>
    },
    {
      path: "/",
      element: user ? <Homepage/> : <Login/>,
      errorElement : <ErrorPage/>
    },
    {
      path: "/profile/find/:email",
      element: user ? <Profile/> : <Login/>,
      errorElement : <ErrorPage/>
    }
  ]);



  return (
    <div className='font-display scroll-smooth '>

      <RouterProvider router={router} />

    </div>
  );
}


export default App;