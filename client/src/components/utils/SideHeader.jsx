import React from 'react';
import school_logo from "../../assets/school-logo.png"

const SideHeader = () => {
  return (
    <div>
        <div className="flex items-center gap-3 p-2 px-5 leading-5">
            <img src={school_logo}  alt="school_logo" className="w-[40px] h-[40px] rounded-full"/>
            <span className="text-[16px] font-[700] text-[#373737]">Chaudhary Chhotu Ram Public School</span>
        </div>
    </div>
  )
}

export default SideHeader