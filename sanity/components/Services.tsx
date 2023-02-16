import React from 'react'
import Card from './Card'

function Services() {
  return (
    <div className='flex justify-center items-center bg-secondary align-center'>
      <div className=' flex  gap-3 justify-center items-center max-w-screen-2xl flex-wrap m-5 w-full '> 
        <Card title='Basic Exterior' description=' T3 Conditioner | Wheel Cleaner' link='https://buy.stripe.com/test_fZe4iAe4Rasf8sofYY'/>
        <Card title='Exterior#2' description='HotShine® Carnauba Wax | Repel Shield | Tire Shine | Underbody Wash | T3 Conditioner | Wheel Cleaner'link='https://buy.stripe.com/test_5kAbL2bWJeIv6kg145'/>
        <Card title='Exterior#1' description=' Repel Shield | Tire Shine | Underbody Wash | T3 Conditioner | Wheel Cleaner' link='https://buy.stripe.com/test_9AQ16o6Cp6bZ384bIK'/>
        <Card title='Platinium' description='Platinum Seal | Wheel Polish | HotShine® Carnauba Wax | Repel Shield | Tire Shine | Underbody Wash | T3 Conditioner | Wheel Cleaner'link='https://buy.stripe.com/test_fZe2asbWJ9ob9wsfZ1'/>
      </div>
    </div>
  )
}

export default Services
