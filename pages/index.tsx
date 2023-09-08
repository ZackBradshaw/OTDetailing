// @ts-ignore
import dynamic from 'next/dynamic';
import 'react-chat-widget/lib/styles.css';

const Widget = dynamic(
  () => import('react-chat-widget').then((mod) => mod.Widget),
  { ssr: false }
);

const addResponseMessage = dynamic(
  () => import('react-chat-widget').then((mod) => mod.addResponseMessage),
  { ssr: false }
);
import Layout from '../sanity/components/Layout'
import Services from '../sanity/components/Services'
import Carousel from '../sanity/components/Carousel'
import BookingComponent from '../sanity/components/BookingComponent'
import ServiceCards from '../sanity/components/ServiceCards'
import DetailingServices from '../sanity/components/DetailingServices'
import { useEffect } from 'react'

export default function IndexPage() {
  useEffect(() => {
    addResponseMessage('What can we help you with?');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    // Now send the message throught the backend API
    fetch('http://localhost:3002/api/chat', { // Update the URL to the correct endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_input: newMessage }),
    })
      .then((response) => response.json())
      .then((data) => {
        addResponseMessage(data.response);
      });
  };

  return (
    <>
      <Layout>
        <Carousel />
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Services />
          <BookingComponent />
        </div>
        {/*in the decription field fill in interior services*/}
        <ServiceCards image={'https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} service={<DetailingServices serviceType={'exterior'}/>}/>
        <ServiceCards image={'Interior.jpg'} service={<DetailingServices serviceType={'interior'}/>}/>
        <ServiceCards image={'Wax.jpg'} service={<DetailingServices serviceType={'miscellaneous'}/>}/>
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Chat with our AI"
          subtitle=""
        />
      </Layout>
    </>
  )
}
