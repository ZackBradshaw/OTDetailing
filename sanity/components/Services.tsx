import React from 'react'
import Card from './Card'

function Services() {
  return (
    <div className='flex justify-center items-center bg-black align-center'>
      <div className=' flex justify-around align-center gap-3 items-center max-w-screen-2xl max-[800px]:flex-col m-5 w-full '>

        <Card title='Basic Exterior' description=' T3 Conditioner | Wheel Cleaner'/>
        <Card title='Exterior#2' description='HotShine® Carnauba Wax | Repel Shield | Tire Shine | Underbody Wash | T3 Conditioner | Wheel Cleaner'/>
        <Card title='Exterior#1' description=' Repel Shield | Tire Shine | Underbody Wash | T3 Conditioner | Wheel Cleaner'/>
        <Card title='Platinium' description='Platinum Seal | Wheel Polish | HotShine® Carnauba Wax | Repel Shield | Tire Shine | Underbody Wash | T3 Conditioner | Wheel Cleaner'/>
      </div>
    </div>
  )
}

export default Services
