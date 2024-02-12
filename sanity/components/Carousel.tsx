import React, { useEffect, useState } from 'react'
import Card from './Card'
import Hero from './Hero'

export default function Carousel() {
  const [activeItem, setActiveItem] = useState(0);
  const carouselItems = [
    {
      id: "exterior",
      image: "https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      descriptions: '',
      title: ''
    },
    {
      id: "interior",
      image: "/Interior.jpg",
      descriptions: '',
      title: ''
    },
    {
      id: "wax",
      image: "/Wax.jpg",
      descriptions: '',
      title: ''
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prevActiveItem) => (prevActiveItem + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="carousel w-full">
        <div id={`item${activeItem + 1}`} className="carousel-item w-full">
          <Hero image={carouselItems[activeItem].image} descriptions={carouselItems[activeItem].descriptions} title={carouselItems[activeItem].title} />
        </div>
      </div>
    </div>
  ); 
}

