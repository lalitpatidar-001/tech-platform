import React from 'react'
import simulation_img from "../assets/simulation-img.png";
import vedios_img from "../assets/vedios-img.png";





const ImageCard = ({src}) => {

    const images = {
        simulation_img:simulation_img,
        vedios_img:vedios_img
    }
  return (
    <img src={images[src]} className="h-[135px] z-10 w-[240px]"/>
    
  )
}

export default ImageCard