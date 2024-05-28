import React from 'react'
import MenuItem from './MenuItem'
import { menu_items } from './menu_list';
import {useLocation} from "react-router-dom"


const SideMenu = () => {
    const {pathname} = useLocation();
    console.log(pathname)
  return (
    <div className="flex flex-col gap-6 pt-[30px] px-7">
    {
        menu_items?.map((item,index)=>(
        <MenuItem  active={item?.path===pathname} {...item} key={index}/>
        ))
    }
    </div>
  )
}

export default SideMenu