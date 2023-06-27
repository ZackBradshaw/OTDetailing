import React from 'react'


const ServiceCards = ({ image, title, description, button })  => {
  return (
      <div className='text-black w-[50%] h-[30%] card lg:card-side bg-base-100 shadow-xl'>
        <figure><img src={image} alt='Album' /></figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{description}</p>
          <div className='card-actions w-full'>
            <button className='btn btn-primary w-full'>{button}</button>
          </div>
        </div>
      </div>

  )
}

export default ServiceCards