import React from 'react'
import SideBar from './SideBar'
import Hero from './Hero'

function Main() {
  return (
    <section className='flex w-full '>
      {/* Side menu bar */}
      <SideBar/>
      {/* { main video section} */}
      <Hero/>
    </section>
  )
}

export default Main