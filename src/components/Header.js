import React from 'react'
import SearchBar from './SearchBar'
import {ReactComponent as Threedot} from "../Images/Threedot.svg"
import {ReactComponent as Youtube} from "../Images/Youtube.svg"
import {ReactComponent as Create} from "../Images/Create.svg"
import profile from "../Images/profile.jpg"
import { menutoggle } from '../Store/menuSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const dispatch= useDispatch();

  function handleclick(){
    dispatch(menutoggle())
    
  }
  return (
    <header className='flex justify-between pl-4 sticky top-0 bg-white'>
      <div className='h-[40px] flex mt-2'>
         {/* icons and ytlogo*/}
         <div className='w-[24px] h-[24px] cursor-pointer'
         onClick={()=>handleclick()}
         ><Threedot/></div>
       <Link to="/"> <div className='w-42 h-6 ml-4 cursor-pointer'> <Youtube/></div></Link>
       
      </div>
      <div>
      <SearchBar/>
      </div>
      <div className='flex items-center pb-2 '>
        <div className='mx-2 cursor-pointer'><Create/></div>
      
      <img className='h-14 cursor-pointer ' src={profile} alt="profile"/>
      </div>
       
    </header>
  )
}

export default Header