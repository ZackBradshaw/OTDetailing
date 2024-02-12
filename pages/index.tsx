// @ts-ignore
import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-chat-widget/lib/styles.css';
import Head from 'next/head';

// Conditionally import addResponseMessage only on the client side
let addResponseMessage;
if (typeof window !== 'undefined') {
  addResponseMessage = require('react-chat-widget').addResponseMessage;
}

const importWidget = () => import('react-chat-widget').then((mod) => mod.Widget as React.ComponentType);
const Widget = dynamic(importWidget, { ssr: false });

import Layout from '../sanity/components/Layout'
import Services from '../sanity/components/Services'
import Carousel from '../sanity/components/Carousel'
import BookingComponent from '../sanity/components/BookingComponent'
import ServiceCards from '../sanity/components/ServiceCards'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import DetailingServices from '../sanity/components/DetailingServices'
import { useEffect } from 'react'

const ImageComparison = dynamic(
  () => import('react-compare-slider').then((mod) => ({
    default: mod.ReactCompareSlider,
    ReactCompareSliderImage: mod.ReactCompareSliderImage,
  })),
  { ssr: false }
);


export default function IndexPage() {
  useEffect(() => {
    if (addResponseMessage) {
      addResponseMessage('What can we help you with?');
    }
  }, []);

  const handleNewUserMessage = (newMessage) => {
    // Now send the message through the backend API
    fetch('http://127.0.0.1:8000/chat', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_input: newMessage }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (addResponseMessage) {
          addResponseMessage(data.response);
        }
      });
  };


  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'exterior', name: 'Exterior' },
    { id: 'interior', name: 'Interior' },
    { id: 'fullService', name: 'Full Service' },
  ];
  
  return (
    <>
      {/* <Layout>
        <Carousel />
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Services />
          <BookingComponent />
        </div>
        {/* <ServiceCards image={'https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} service={<DetailingServices serviceType={'exterior'}/>}/> */}
        {/* <ServiceCards image={'Interior.jpg'} service={<DetailingServices serviceType={'interior'}/>}/> */}
        {/* <ServiceCards image={'Wax.jpg'} service={<DetailingServices serviceType={'miscellaneous'}/>}/> */}
        {/* <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Chat with our AI"
          subtitle=""
          {...({} as any)}
        /> */}
        {/* <img src="Steps.png" /> */}
        {/* <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src="trunk-before.jpg" alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src="trunk-after.jpg" alt="Image two" />}
        /> */}
      {/* </Layout> */} 

    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>OTDetailing - Premium Car Detailing Services</title>
        <meta name="description" content="Top-notch car detailing services to make your vehicle shine." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a className="font-bold text-2xl lg:text-4xl" href="#">
            OTDetailing
          </a>
          <div className="flex justify-end">
            <div className="hidden md:flex items-center">
              <a href="#" className="py-2 px-3">Detailing Services</a>
              <a href="#" className="py-2 px-3">Packages</a>
              <a href="#" className="py-2 px-3">About Us</a>
              <a href="#" className="py-2 px-3">Contact</a>
            </div>
            <div className="md:hidden">

              {/* Mobile menu button */}
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-white font-bold text-5xl mb-4">Premium Car Detailing Services</h1>
          <p className="text-white text-xl mb-10">Make your vehicle shine with our professional detailing</p>
          <a href="#services" className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full text-lg">Explore Services</a>
        </div>
      </header>

      {/* Services Section */}
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                Our Services
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-600">
                Choose the perfect service for your car.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`p-6 border border-gray-200 rounded-lg text-center cursor-pointer ${
                      selectedService === service.id ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{service.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}

