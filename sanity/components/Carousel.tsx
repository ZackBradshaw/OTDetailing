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
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${index === 0 ? items.length : index}`} className="btn btn-circle">❮</a> 
            <a href={`#slide${index+2 > items.length ? 1 : index+2}`} className="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
    </div>
  )
}
