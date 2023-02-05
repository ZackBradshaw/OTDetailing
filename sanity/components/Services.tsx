import React from 'react'
import Card from './Card'

function Services() {
  return (
    <div className='flex justify-center items-center bg-black align-center'>
      <div className=' flex justify-around align-center gap-3 items-center max-w-screen-2xl max-[800px]:flex-col m-5 w-full '>
        <Card image='https://picsum.photos/seed/picsum/800/800' title='Basic' />
        <Card image='https://picsum.photos/seed/picsum/800/800' title='Normal' />
        <Card image='https://picsum.photos/seed/picsum/800/800' title='Advanced' />
      </div>
    </div>
  )
}

export default Services
