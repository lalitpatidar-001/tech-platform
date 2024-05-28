import React from 'react'
import Sidebar from '../components/Sidebar'
import {Outlet} from "react-router-dom"

const HomeLayout = () => {
  return (
    <div className="flex">
    {/* sidebat */}
        <div className="flex-1 max-w-[279px]">
            <Sidebar/>
        </div>
    
    {/* outlet */}
        <div className="flex-[4]">
            <Outlet/>
        </div>
    </div>
  )
}

export default HomeLayout