import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'
import {ReactComponent as Like} from "../Images/Like.svg"
import {ReactComponent as Dislike} from "../Images/Dislike.svg"

function Watch() {
  const [video, setvideo]= useState([])
  const {id}= useParams()
  const videoData= useSelector((state)=>state.post);
  console.log(videoData)
 
  useEffect(()=>{
    if(videoData){
      const vid =videoData?.find((el)=>el.postId===id);
      setvideo(vid)
    console.log(vid)
    }
  },[videoData])
    console.log(id)
    
  return (
    <div className='flex items-center flex-col '>
        <SideBar/>
        <div className='w-[700px]'>
        <div className='flex flex-col items-center'>
        <video  className='w-[700px] h-[400px] flex justify-center border'  src={video?.submission?.mediaUrl} controls/>
        
        </div>
        <div className='flex flex-col items-start'>
       <h1 className='text-xl'>{video?.submission?.title}</h1>
       <div className='flex flex-row w-full'>
        <div className='w-full flex'>
        <img className='h-9 w-9 rounded-full mx-1' src={video?.creator?.pic} alt="profile"/>
        <h2 className=' text-lg'>{video?.creator?.name || video?.creator?.handle}</h2>
        <button className=' mx-3 bg-black text-white rounded-full p-2 h-10'>Subscribe</button>
        </div>
        <div className='flex flex-row justify-end w-full'>
        <div className='flex flex-row items-center'>
        <div className='w-16 h-16 relative'>
            <Like/>
            <div className='absolute bottom-0 left-[35%]'>{video?.reaction?.count}</div>
          </div>
        
        <div className='w-6 h-6'>
            <Dislike/>
            </div>
        </div>
            
        </div>
       </div>
       </div>
       <div className='my-3 bg-gray-100'>{video?.submission?.description}</div>
       </div>
    </div>
  )
}

export default Watch