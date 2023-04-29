import React from 'react'
import Card from './Card'
import Hero from './Hero'

export default function Carousel() {
  return (
<div className="flex flex-col items-center w-full">
  <div className="carousel w-full h-[80vh] flex ">
    <div id="item1" className="carousel-item w-full">
      <Hero image={"https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} description={'Superior service at affordable price'} title={'Exterior'} />
    </div>
    <div id="item2" className="carousel-item w-full">
      <Hero image={"https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} description={'Superior service at affordable price'} title={'Exterior'} />
    </div>
    <div id="item3" className="carousel-item w-full">
        <Hero image={"https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} description={'Superior service at affordable price'} title={'Exterior'} />
      </div>
      <div id="item4" className="carousel-item w-full">
        <Hero image={"https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} description={'Superior service at affordable price'} title={'Exterior'} />
      </div>
      <div className="flex justify-center max-w-screen-2xl flex-start ml-[3rem] absolute bottom-[200px] z-10 w-full py-2 gap-[3rem]">
        <Card link={'#item1'} title={'Exterior'} description={'Get A quote'}/>
        <Card link={'#item2'} title={'Interior'} description={'Get A quote'}/>
        <Card link={'#item3'} title={'Misc'} description={'Get A quote'}/>
      </div>
    </div>
</div>
); 
}
