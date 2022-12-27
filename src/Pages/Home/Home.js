import React from 'react';
import './Home.css'
import { IoMdPhotos } from 'react-icons/io'
const Home = () => {
    return (
        <div className='bg-home max-w-[1280px] mx-auto '>
            <div className='text-center shadow-style pt-4 m-7 bg-white w-3/5 mx-auto rounded-2xl'>
                <div className='mx-auto'>
                    <input className='w-4/5   mx-auto p-5 bg-blue-50 rounded-3xl' type="text" placeholder='share your fillings here' />
                </div>
                <hr className='mt-3 w-[90%] mx-auto' />
                <div className='flex justify-center align-center mx-auto  text-xl   mt-4 hover:bg-blue-50 p-2 w-60 rounded-lg '>
                    <IoMdPhotos ></IoMdPhotos>
                    <h2 className='mb -mt-1  ml-2'  >Add Photos</h2>
                </div>
                <input className='bg-blue-500 p-3 w-4/5 rounded-lg my-4 text-white font-bold hover:bg-blue-600' type="submit" value="Post" />
            </div>
        </div>
    );
};

export default Home;