import Layout from '../sanity/components/Layout'
import Services from '../sanity/components/Services'
import Carousel from '../sanity/components/Carousel'
import BookingComponent from '../sanity/components/BookingComponent'
import ServiceCards from '../sanity/components/ServiceCards'
import DetailingServices from '../sanity/components/DetailingServices'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import dynamic from 'next/dynamic'
import React from 'react'
import CarDetailingFlowChart from '../sanity/components/CarDetailingFlowChart'

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Carousel />
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Services />
          <BookingComponent />
        </div>
        in the decription field fill in interior services
        <ServiceCards
          image={'https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
          service={<DetailingServices serviceType={'exterior'} />} />
        <ServiceCards image={'Interior.jpg'} service={<DetailingServices serviceType={'interior'} />} />
        <ServiceCards image={'Wax.jpg'} service={<DetailingServices serviceType={'miscellaneous'} />} />
        <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src="trunk-before.jpg" alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src="trunk-after.jpg" alt="Image two" />}
        />
        <CarDetailingFlowChart />
      </Layout>
    </>
  )
}
