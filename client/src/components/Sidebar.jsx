import React from 'react'
import SideHeader from './utils/SideHeader'
import SideMenu from './utils/SideMenu'

const Sidebar = () => {
  return (
    <div className="w-full h-screen bg-[#FFFFFF] drop-shadow-2xl shadow-md shadow-[#393838] drop-shadow-black">
    <SideHeader/>
    <SideMenu/>
    </div>
  )
}

export default Sidebar