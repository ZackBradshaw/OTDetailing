import Layout from '../sanity/components/Layout'
import Services from '../sanity/components/Services'
import Carousel from '../sanity/components/Carousel'
import BookingComponent from '../sanity/components/BookingComponent'
import ServiceCards from '../sanity/components/ServiceCards'
import DetailingServices from '../sanity/components/DetailingServices'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import dynamic from 'next/dynamic'
import React from 'react'
import BeforeAfterCarousel from '../sanity/components/BeforeAfterCarousel'
import Hero from '../sanity/components/Hero'

export default function IndexPage() {
  const carouselItems = [
    <Hero
      image={'https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
      title={''} descriptions={''} />,
    <Hero image={'Interior.jpg'} title={''} descriptions={''} />,
    <Hero image={'Wax.jpg'} title={''} descriptions={''} />
  ];

  return (
    <>
      <Layout>
        <Carousel items={carouselItems} />
        <div className='w-full'>
          <Services />
          <BookingComponent />
        </div>
        in the decription field fill in interior services
        <img src='Steps.png' />
        {/*<ServiceCards*/}
        {/*  image={'https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}*/}
        {/*  service={<DetailingServices serviceType={'exterior'} />} />*/}
        {/*<ServiceCards image={'Interior.jpg'} service={<DetailingServices serviceType={'interior'} />} />*/}
        {/*<ServiceCards image={'Wax.jpg'} service={<DetailingServices serviceType={'miscellaneous'} />} />*/}
        <div className='min-w-screen-2xl'>
          <BeforeAfterCarousel />
        </div>
      </Layout>
    </>
  )
}
