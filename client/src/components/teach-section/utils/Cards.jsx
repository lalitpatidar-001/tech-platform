import React from 'react'
import SecondryButton from '../../../shared/SecondryButton'
import ImageCard from '../../../shared/ImageCard'
import yellow_bg from "../../../assets/yellow-bg.png"



const Cards = () => {
    return (
        <div className="flex gap-3 w-full">
            <div className="flex-1 flex gap-2 bg-[#CFECFE] rounded-xl p-6">
                <div className={`flex flex-[2] flex-col gap-4 text-[#193A65]`}>
                    <h1 className="font-bold text-[24px]">Simulation</h1>
                    <span className="text-[16px]">Simulation are a powerfull educational</span>
                    <SecondryButton style="text-[#193A65] border-[#193A65]"/>
                </div>
                <div className="flex-[3]">
                <ImageCard src="simulation_img" />
                </div>
            </div>
            <div className="flex-1 bg-[#5AB2A6] flex gap-2  rounded-xl p-6 ">
                <div className={`flex flex-[2] flex-col gap-4 text-[#FFFFFF]`}>
                    <h1 className="font-bold text-[24px]">Your videos</h1>
                    <span className="text-[16px]">Simulation are a powerfull educational</span>
                    <SecondryButton style="text-[#FFFFFF] border-[#FFFFFF]"/>
                </div>
                <div className="flex-[3] relative">
                    <ImageCard src="vedios_img"/>
                </div>
            </div>
        </div>
    )
}

export default Cards