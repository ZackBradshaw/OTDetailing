import dynamic from 'next/dynamic';
import 'react-chat-widget/lib/styles.css';
import Layout from '../sanity/components/Layout'
import Services from '../sanity/components/Services'
import Carousel from '../sanity/components/Carousel'
import BookingComponent from '../sanity/components/BookingComponent'
import ServiceCards from '../sanity/components/ServiceCards'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import DetailingServices from '../sanity/components/DetailingServices'
import { useEffect } from 'react'
import BeforeAfter from '../sanity/components/BeforeAfter';
import Hero from '../sanity/components/Hero';
import GoogleMaps from 'sanity/components/GoogleMaps';

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Hero 
          image="https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="" 
          descriptions=''
         />
        <div className="relative w-full h-full">
          <GoogleMaps />
          <Services />
          <BookingComponent />
        </div>
        <BeforeAfter />
      </Layout>
    </>
  )
}
