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
      <div className="carousel w-full ">
        {carouselItems.map((item, index) => (
          <div key={item.id} className={`carousel-item w-full ${index === activeItem ? 'block' : 'hidden'}`}>
            <Hero image={item.image} descriptions={item.descriptions} title={item.title} />
          </div>
        ))}
        <div className="flex flex-col justify-center flex-start absolute bottom-[18%] z-10 w-full py-2 gap-3 lg:flex-row ">
          {/* Dynamically generate navigation cards if needed */}
        </div>
      </div>
    </div>
  ); 
}

