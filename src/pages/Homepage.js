import {Sidebar} from '../components/Sidebar';
import {Feed} from '../components/Feed';
import {Rightbar} from '../components/Rightbar';
import { Navbar } from '../components/Nav';
// import { Footer} from '../components/Footer';

export const Homepage = () => {
  return (
    // bg-gradient-to-r from-white via-white to-white

    <>
    <Navbar/>

    <div className='w-full p-1 md:p-5'>
      <div className='flex justify-between 
         max-w-7xl mx-auto '>
      
          <Sidebar/>
          <Feed/>
          <Rightbar/>

          
      </div>
          {/* <Footer/> */}

    </div>
  </>
  )
}
