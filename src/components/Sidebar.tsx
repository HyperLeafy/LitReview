import React from 'react';
import { Link } from 'react-router-dom';
// import Homepage from '../pages/home/Homepage';

const Sidebar:React.FC = () => {
  return (
    <>
      <aside className='flex flex-col sm:h-screen sm:w-[15%] rounded-r-xl bg-[#031019]'>
        <Link to='/'>
        <h2 className='text-2xl text-white font-semibold p-2 mt-2 justify-center border-b text-center '>Lit<span className='text-blue-400'>Review</span></h2>
        </Link>
            
            <nav className='text-xl p-2'>
              <div className='mt-6 p-5 flex flex-col justify-start items-center  pl-8 w-full rounded-md hover:bg-gray-900 border-black-600 space-y-3 pb-5 '>
                <Link className='flex jusitfy-start items-center space-x-6 w-full  focus:outline-none hover:text-blue-400 text-white rounded' to='/'>Home</Link>
              </div>

              <div className='mt-6 p-5 flex flex-col justify-start items-center  pl-8 w-full rounded-md hover:bg-gray-900 border-black-600 space-y-3 pb-5 '>
                <Link className='flex jusitfy-start items-center space-x-6 w-full  focus:outline-none hover:text-blue-400 text-white rounded' to='/books'>Book Listings</Link>
              </div>

              <div className='mt-6 p-5 flex flex-col justify-start items-center  pl-8 w-full rounded-md hover:bg-gray-900 border-black-600 space-y-3 pb-5 '>
                <Link className='flex jusitfy-start items-center space-x-6 w-full  focus:outline-none hover:text-blue-400 text-white rounded' to='/reviews'>My Reviews</Link>
              </div>

              <div className='mt-6 p-5 flex flex-col justify-start items-center  pl-8 w-full rounded-md hover:bg-gray-900 border-black-600 space-y-3 pb-5 '>
                <Link className='flex jusitfy-start items-center space-x-6 w-full  focus:outline-none hover:text-blue-400 text-white rounded' to='/user'>Profile</Link>
              </div>
            </nav>
            
      </aside>
    </>
  )
}

export default Sidebar;