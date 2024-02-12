// @ts-ignore
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
import BeforeAfter from 'sanity/components/BeforeAfter';

// let addResponseMessage;
// if (typeof window !== 'undefined') {
//   addResponseMessage = require('react-chat-widget').addResponseMessage;
// }

// const importWidget = () => import('react-chat-widget').then((mod) => mod.Widget as React.ComponentType);
// const Widget = dynamic(importWidget, { ssr: false });


// const handleNewUserMessage = (newMessage) => {
//   // Now send the message through the backend API
//   fetch('http://127.0.0.1:8000/chat', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ user_input: newMessage }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (addResponseMessage) {
//         addResponseMessage(data.response);
//       }
//     });
// };

export default function IndexPage() {
  //   if (addResponseMessage) {
  //     addResponseMessage('What can we help you with?');
  //   }
  // }, []);

  return (
    <>
      <Layout>
        <Carousel />
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Services />
          <BookingComponent />
        </div>
        <BeforeAfter />

        {/* <ServiceCards image={'https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} service={<DetailingServices serviceType={'exterior'}/>}/> */}
        {/* <ServiceCards image={'Interior.jpg'} service={<DetailingServices serviceType={'interior'}/>}/> */}
        {/* <ServiceCards image={'Wax.jpg'} service={<DetailingServices serviceType={'miscellaneous'}/>}/> */}
        {/* <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Chat with our AI"
          subtitle=""
          {...({} as any)}
        /> */}

      </Layout>
    </>
  )
}

