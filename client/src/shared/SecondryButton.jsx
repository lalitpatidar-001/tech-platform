import React from 'react'

const SecondryButton = ({style}) => {
    console.log(style)
    console.log(typeof style)
  return (
    <button className={`bg-transparent border  font-semibold ${style} outline-none w-fit px-3  `}>View All</button>
  )
}

export default SecondryButton