import React from "react";
import { ReactComponent as Home } from "../Images/Home-icon.svg";
import { ReactComponent as Shorts } from "../Images/Shorts-icon.svg";
import { ReactComponent as Subscription } from "../Images/Subscription.svg";
import { ReactComponent as Library } from "../Images/Libraray.svg";
import { ReactComponent as Hisory } from "../Images/History.svg";
import { ReactComponent as YourVideo } from "../Images/Yourvideo.svg";
import { ReactComponent as WatchLater } from "../Images/watchlater.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar() {
  const ismenu = useSelector((state) => state.menu);

  if (ismenu) {
    return (
      <div className=" font-sans   fixed left-0 h-full bg-white z-10 "><Link to="/">
        <div className="pl-4 hover:bg-gray-200 cursor-pointer flex flex-row py-2 w-[200px] rounded-lg  bg-gray-100 font-[600]">
          
            {" "}
            <div>
              <Home />
            </div>
           
          <li className="list-none mx-4 text-sm">Home</li>{" "}
        </div>
        </Link>
        <div className="pl-4 hover:bg-gray-100 cursor-pointer flex flex-row py-2 rounded-lg ">
          <div>
            {/*icon */}
            <Shorts />
          </div>{" "}
          <li className="list-none mx-4 text-sm">Shorts</li>{" "}
        </div>

        <div className="pl-4 hover:bg-gray-100 cursor-pointer flex flex-row py-2 rounded-lg  ">
          <div>
            {/*icon */}
            <Subscription />
          </div>{" "}
          <li className="list-none mx-4 text-sm">Subscription</li>{" "}
        </div>
        <div className="border-b m-4"></div>
        <div className="pl-4 hover:bg-gray-100 cursor-pointer flex flex-row py-2 rounded-lg ">
          <div>
            {/*icon */}
            <Library />
          </div>{" "}
          <li className="list-none mx-4 text-sm">Library</li>{" "}
        </div>
        <div className="pl-4 hover:bg-gray-100 cursor-pointer flex flex-row py-2 rounded-lg ">
          <div>
            {/*icon */}
            <Hisory />
          </div>{" "}
          <li className="list-none mx-4 text-sm">Hisory</li>{" "}
        </div>
        <div className="pl-4 hover:bg-gray-100 cursor-pointer flex flex-row py-2 rounded-lg ">
          <div>
            {/*icon */}
            <YourVideo />
          </div>{" "}
          <li className="list-none mx-4 text-sm">Your videos</li>
        </div>
        <div className="pl-4 hover:bg-gray-100 cursor-pointer flex flex-row py-2 rounded-lg ">
          <div>
            {/*icon */}
            <WatchLater />
          </div>{" "}
          <li className="list-none mx-4 text-sm">Watch Later</li>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fixed left-0">
        <div className="w-16 pb-4 pt-2 pr-2 flex flex-col items-center">
          <div className="h-6 w-6 mb-[6px]">
            <Home />
          </div>{" "}
          <p className="text-[11px]">Home</p>
        </div>
        <div className="w-16 py-4 pt-2 pr-2 flex flex-col items-center">
          <div className="h-6 w-6 mb-[6px]">
            <Shorts />
          </div>{" "}
          <p className="text-[11px]">Shorts</p>
        </div>
        <div className="w-16 py-4 pt-2 pr-2 flex flex-col items-center">
          <div className="h-6 w-6 mb-[6px]">
            <Subscription />
          </div>
          <p className="text-[11px]">Subscription</p>
        </div>
        <div className="w-16 py-4 pt-2 pr-2 flex flex-col items-center">
          <div className="h-6 w-6 mb-[6px]">
            <Library />
          </div>{" "}
          <p className="text-[11px]">Libraray</p>
        </div>
      </div>
    );
  }
}

export default SideBar;
