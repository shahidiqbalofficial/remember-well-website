import React from 'react'
import { FaStar } from 'react-icons/fa'

function Happycard() {
  return (
    <div className='w-[23rem] border h-56 bg-gray-100 flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
        <FaStar className='text-yellow-400' size={20}/>
        <FaStar className='text-yellow-400'  size={20}/>
        <FaStar className='text-yellow-400' size={20}/>
        <FaStar className='text-yellow-400'  size={20}/>
        <FaStar className='text-yellow-400'  size={20}/>
       
        </div>
        <p className='text-gray-500 text-sm md:text-lg '>Michael Hofmann</p>
        <p className=' w-80 text-gray-400 my-4 text-sm lg:text-lg'>Came across this QR code on TikTok and I have to say, it's a nice way to preserve and share memories.</p>
      </div>

    </div>
  )
}

export default Happycard
