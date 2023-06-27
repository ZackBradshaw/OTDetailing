import React from 'react'
import Link from 'next/link'

const Card = ({ title, link }) => {

  return (
    <a href={link}>
      <div className='card glass lg:w-[20rem] h-[10vh] text-center flex justify-center bg-opacity-30 rounded-sm '>
        <div className='card-body h-contain flex text-center items-center p-1'>
            <h2 className='card-title text-white text-[2rem] w-full h-full text-center'>{title}</h2>
        </div>
      </div>
    </a>
  )
}

export default Card