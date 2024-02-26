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

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Hero 
          image="https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="" 
          descriptions=''
         />
        <link rel="stylesheet" href="https://embed.pickaxeproject.com/axe/scripts/fab/styles.css" />
        <script src="https://embed.pickaxeproject.com/axe/scripts/fab/bundle.js"></script>
        <div id="rendering-information" data-height="500px" data-width="500px" data-formid="AutoExpert_Your_Digital_Car_Concierge_RUB22" data-frame-source="https://embed.pickaxeproject.com/axe?id=AutoExpert_Your_Digital_Car_Concierge_RUB22&mode=embed_gold&host=beta&theme=light&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=888888&c_bb=228DD7&c_bt=FFFFFF&c_t=000000&s_ffo=100&s_bbo=100&s_f=minimalist&s_b=filled&s_t=2&s_to=1&s_r=2" data-title="Auto-Expert: Your Digital Car Concierge">
        </div>
        <iframe
          width="450"
          height="250"
          frameBorder="0" style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/MAP_MODE?key=${process.env.GOOGLE_API_KEY}&PARAMETERS`}
          allowFullScreen>
        </iframe>
        <div className="relative w-full h-full">
          <Services />
          <BookingComponent />
        </div>
        <BeforeAfter />
      </Layout>
    </>
  )
}
