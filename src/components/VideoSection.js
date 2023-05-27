import React, { useEffect, useState } from "react";

function VideoSection() {
  const baseURL = "https://internship-service.onrender.com/videos?page=";
  const [page, setpage] = useState(0);
  const [videoData, setVideoData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  async function getVideos() {
    const data = await fetch(`${baseURL + page}`);
    const json = await data.json();
    console.log(json)
    setVideoData([...videoData,...json?.data?.posts]);
    console.log(videoData);
  }
  useEffect(() => {
    
    getVideos();
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight 
    )
    return;
    setIsFetching(true);
  }

     
  function getMorePosts() {
    setpage(page+1)
    setTimeout(() => {
      
      getVideos();
      setIsFetching(false);
    }, 2000);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!isFetching) return;
    getMorePosts();
  }, [isFetching]);
  console.log(videoData)
  return (
    <div className="px-3 p-1 flex flex-col my-4 flex-wrap w-full ">
      <div className="flex flex-row gap-4 flex-wrap">
      {videoData?.map((item) => {
        console.log(item)
        return (
          
          <div className="flex flex-col">
            <div className="w-[345px] h-[195px] bg-gray-200 rounded-xl">
              <img
                className="h-[195px] w-full rounded-xl object-cover  hover:rounded-sm cursor-pointer"
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
                  <h1 className="text-xl font-semibold flex  ">
                    {item?.submission?.title}
                  </h1>
                </div>
                <h2 className=" text-gray-500 font-semibold">
                    {/** if name is not comming from api then we will show handle */}
                  {item?.creator?.name || item?.creator?.handle}
                </h2>{" "}
                
                <h3 className=" text-gray-500 font-semibold">
                  {item?.reaction?.count * 15} Views
                </h3>
              </div>
            </div>
            </div>
           
        );
      })}
       </div>
    </div>
  );
}

export default VideoSection;
