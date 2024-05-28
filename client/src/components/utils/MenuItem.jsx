import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import {useNavigate} from "react-router-dom"

const MenuItem = ({icon,title,active,path}) => {
    const navigate = useNavigate();
  return (

    <div onClick={()=>navigate(path)} className={`flex items-center gap-3  cursor-pointer  transform transition-all duration-500  ease-in-out  ${active ? "text-[#4B65F6]":"text-[#909395] hover:text-black"}`}>
        {icon}
        <span className="text-[17px] font-semibold">{title}</span>
    </div>
  )
}

export default MenuItem