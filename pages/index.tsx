import Layout from '../sanity/components/Layout'
import Hero from '../sanity/components/Hero'
import Services from '../sanity/components/Services'
import CalendlyInbed from '../sanity/components/CalendlyInbed'
import Carousel from '../sanity/components/Carousel'
import Card from '../sanity/components/Card'

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Carousel />
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Services src="your_iframe_source" style={{ width: '100%', height: '100%' }}/>
          <BookingComponent />
        </div>
      </Layout>
    </>
  )
}
