import React from 'react'
import VideoSection from './VideoSection'
import { useSelector } from 'react-redux'

function Hero() {
  const ismenu= useSelector((state)=>state.menu)
  return (
    <div className='flex'>
     {ismenu?  <div className='w-[200px] '>
g
      </div>:<div className='w-[64px]'></div>}
    <main className='ml-7  flex flex-col w-full '>
      {/* suggestion buttons not working(dynamic) currently*/}
      <div className='flex'>
        <li className='p-1 px-3 bg-[#0f0f0f] text-white mx-4 rounded-lg list-none text-base'>All</li>
        <li className='p-1 px-3 bg-gray-100 mx-4 rounded-lg list-none text-base'>News</li>
        <li className='p-1 px-3 bg-gray-100 mx-4 rounded-lg list-none text-base'>Motivation</li>
        <li className='p-1 px-3 bg-gray-100 mx-4 rounded-lg list-none text-base'>Stocks</li>
        <li className='p-1 px-3 bg-gray-100 mx-4 rounded-lg list-none text-base'>Helth</li>
        <li className='p-1 px-3 bg-gray-100 mx-4 rounded-lg list-none text-base'>Computer Science</li>
        <li className='p-1 px-3 bg-gray-100 mx-4 rounded-lg list-none text-base'>News</li>
        <li className='p-1 px-3 bg-gray-100 mx-4 rounded-lg list-none text-base'>Motivation</li>
        <li className='p-1 px-3 bg-gray-100 mx-4 rounded-lg list-none text-base'>Stocks</li>
        <li className='p-1 px-3 bg-gray-100 mx-4 rounded-lg list-none text-base'>Helth</li>
      </div>
      <VideoSection/>
    </main>
    </div>
  )
}

export default Hero