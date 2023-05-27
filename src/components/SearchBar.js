import React from "react";
import { ReactComponent as SearchIcon } from "../Images/Search.svg";

function SearchBar() {
  return (
    <div className="h-10 flex flex-row border  rounded-full mt-2 border-[#ccc] justify-center items-center">
      <div className="h-full border-r border-[#ccc]">
        {" "}
        <input className="h-full  rounded-l-full p-1 px-4 font-sans font-normal text-[#606060] text-lg 
         outline-none w-[40vw]" 
        type="text"
        placeholder="Search" />
      </div>
      <div className="bg-[#f8f8f8] rounded-r-full h-9">
        {" "}
        <div className="h-6 w-8 m-2 cursor-pointer">
          {" "}
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
