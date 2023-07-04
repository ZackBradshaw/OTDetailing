import React from 'react'

const ServiceCards = ({ image, service }) => {
  return (
    <div className='text-black w-full lg:w-1/3 card lg:card-side bg-base-100 shadow-xl'>
      <figure><img className='object-cover w-full h-64' src={image} alt='Album' /></figure>
      <div className='card-body'>
        <h2 className='card-title'>Services</h2>
        <div className='card-text'>{service}</div>
        <div className='card-actions w-full'>
          <button className='btn btn-primary w-full'>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCards
