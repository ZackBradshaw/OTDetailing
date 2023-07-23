import React, { useState, useEffect } from 'react'
import Card from './Card'
import Hero from './Hero'

export default function Carousel({ items }) {
  const [currentSlide, setCurrentSlide] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide >= items.length) {
          return 1
        } else {
          return prevSlide + 1
        }
      })
    }, 3000)
    return () => clearInterval(timer)
  }, [items.length])

  return (
    <div className='carousel w-full'>
      {items.map((item, index) => (
        <div id={`slide${index+1}`} className={`carousel-item relative w-full ${currentSlide === index+1 ? 'active' : ''}`}>
          {item}
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            {items.map((_, i) => (
              <a href={`#slide${i+1}`} className={`btn btn-circle ${currentSlide === i+1 ? 'active' : ''}`}>{i+1}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
