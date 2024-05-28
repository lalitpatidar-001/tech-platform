import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { tab_list } from './tab_list';

const Header = ({ currentTab, setCurrentTab }) => {

    return (
            <div className="flex justify-between pt-[23px]  items-start ">
                <div className="flex items-center ">
                    <ArrowBackIosIcon className="" style={{ fontSize: 18 }} />
                    <span className="font-semibold text-[20px] ">Chapter Name</span>
                </div>
                <div className="flex self-end gap-2 ">
                    {
                        tab_list?.map((item, index) => (
                            <div
                                onClick={() => setCurrentTab(item.path)}
                                key={index}
                                className={`flex 
                       cursor-pointer flex-col gap-2 text-[14px] font-semibold   ${currentTab == item.path ? "text-black" : "text-[#909395]"}`}>
                                <span className="transition-all ease-out duration-100 ">{item.title}</span>
                                <div className={`transition-all ease-out duration-100  h-[3px] bg-[#4B65F6] ${currentTab === item.path ? "" : "invisible"}`}></div>
                            </div>
                        ))
                    }

                </div>
                <div className="flex gap-4 text-[#909395]">
                    <div className="cursor-pointer hover:text-black"><SearchIcon style={{ fontSize: 20 }} /></div>
                    <div className="cursor-pointer hover:text-black"><FileDownloadOutlinedIcon style={{ fontSize: 20 }} /></div>
                    <div className="cursor-pointer hover:text-black"><ShareOutlinedIcon style={{ fontSize: 20 }} /></div>
                </div>

            </div>
    )
}

export default Header