import React, { useState, useEffect } from 'react'
import Card from './Card'
import Hero from './Hero'

export default function Carousel({ items }) {
  const [currentSlide, setCurrentSlide] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % items.length) + 1)
      console.log(`Switching to slide ${currentSlide}`);
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  console.log(`Rendering Carousel with ${items.length} items. Current slide is ${currentSlide}.`);

  return (
    <div className='carousel w-full'>
      {items.map((item, index) => (
        <div id={`slide${index+1}`} className={`carousel-item relative w-full ${currentSlide === index+1 ? 'active' : ''}`}>
          {item}
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-2">
            {items.map((_, i) => (
              <button onClick={() => setCurrentSlide(i+1)} className={`w-3 h-3 rounded-full ${currentSlide === i+1 ? 'bg-green-500' : 'bg-gray-300'}`}></button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
