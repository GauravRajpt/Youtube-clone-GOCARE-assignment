import React from 'react'
import SearchBar from './SearchBar'
import {ReactComponent as Threedot} from "../Images/Threedot.svg"
import {ReactComponent as Youtube} from "../Images/Youtube.svg"
import {ReactComponent as Create} from "../Images/Create.svg"
import profile from "../Images/profile.jpg"

function Header() {
  return (
    <header className='flex justify-between'>
      <div className='h-[40px] flex mt-2'>
         {/* icons and ytlogo*/}
         <div className='w-[24px] h-[24px]'><Threedot/></div>
        <div className='w-42 h-6 ml-4'> <Youtube/></div>
       
      </div>
      <div>
      <SearchBar/>
      </div>
      <div className='flex items-center pb-2 '>
        <div className='mx-2'><Create/></div>
      
      <img className='h-14 ' src={profile} alt="profile"/>
      </div>
       
    </header>
  )
}

export default Header