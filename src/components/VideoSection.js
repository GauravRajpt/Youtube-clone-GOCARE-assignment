import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Watch from "./Watch";
import { useDispatch } from "react-redux";
import { addVideoData } from "../Store/postData";

function VideoSection() {
  const baseURL = "https://internship-service.onrender.com/videos?page=";
  const [page, setpage] = useState(0);
  const [videoData, setVideoData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch= useDispatch()
  

  async function getVideos() {
    const data = await fetch(`${baseURL + page}`);
    const json = await data.json();
    
    setVideoData([...videoData,...json?.data?.posts]);
    
    
  }
  useEffect(() => {
    
    getVideos();
  }, []);

 if(videoData){
  dispatch(addVideoData(videoData));
  const vid =videoData?.find((el)=>el.postId==='84d07450-7d1b-45a0-8f87-dc8dc69c1f40');
  console.log(vid)
 }
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight 
    )
    return;
    setIsFetching(true);
  }

     
  function getMorePosts() {
   if(page<10){
    setpage(page+1)
    setTimeout(() => {
      
      getVideos();
      setIsFetching(false);
    }, 2000);
  }
   }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    console.log(isFetching)
    if (!isFetching) return;
    
    getMorePosts();
  }, [isFetching]);
  
  return (
    <div className="px-3 p-1 flex flex-col my-4 flex-wrap w-full ">
      <div className="flex flex-row gap-4 flex-wrap">
      {videoData?.map((item,c) => {
       
        return (
          <Link to={`/video/${item?.postId}`} >
          <div className="flex flex-col cursor-pointer" key={c} >
            <div className="w-[345px] h-[195px] bg-gray-200 rounded-xl">
              <img
                className="h-[195px] w-full rounded-xl object-cover  hover:rounded-sm transition-all cursor-pointer"
                src={item?.submission?.thumbnail}
                alt={item?.submission?.title}
              />
            </div>
            <div className="flex flex-row my-3">
              <div className="w-9 h-9 mt-1">
                <img
                  className="w-9 h-9 rounded-full cursor-pointer "
                  src={item?.creator?.pic}
                  alt="profilepic"
                />
              </div>
              <div className="font-sans flex flex-col px-3">
                <div className="flex ">
                  <h1 className="text-lg font-semibold flex leading-5 ">
                    {item?.submission?.title}
                  </h1>
                </div>
                <h2 className=" text-gray-500 font-normal">
                    {/** if name is not comming from api then we will show handle */}
                  {item?.creator?.name || item?.creator?.handle}
                </h2>{" "}
                
                <h3 className=" text-gray-500 font-normal">
                  {item?.reaction?.count * 15} Views
                </h3>
              </div>
            </div>
           
            </div>
            </Link>
           
        );
      })}
      {!isFetching?<Shimmer/>:null}
       </div>
       
    </div>
  );
}

export default VideoSection;
