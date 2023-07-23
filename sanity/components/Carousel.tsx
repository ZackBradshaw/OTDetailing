import React, { useState, useEffect } from 'react'
import Card from './Card'
import Hero from './Hero'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide >= 3) {
          return 1
        } else {
          return prevSlide + 1
        }
      })
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='carousel w-full h-[80vh]'>
        <div id='item1' className={`carousel-item w-full ${currentSlide === 1 ? 'active' : ''}`}>
          <Hero
            image={'https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
            descriptions={'Some description'} title={'Some title'} />
        </div>
        <div id='item2' className={`carousel-item w-full ${currentSlide === 2 ? 'active' : ''}`}>
          <Hero image={'/Interior.jpg'} descriptions={} title={} />
        </div>
        <div id='item3' className={`carousel-item w-full ${currentSlide === 3 ? 'active' : ''}`}>
          <Hero image={'/Wax.jpg'} descriptions={} title={} />
        </div>
        {/*<div*/}
        className='flex flex-col justify-center flex-start absolute bottom-[18%] z-10 w-full py-2 gap-3 lg:flex-row '>
        <Card link={'#item1'} title={'Exterior'} />
        <Card link={'#item2'} title={'Interior'} />
        <Card link={'#item3'} title={'Misc'} />
        {/*<Card link={'#item3'} title={'Misc'} />*/}
      </div>
    </div>
  )
}
