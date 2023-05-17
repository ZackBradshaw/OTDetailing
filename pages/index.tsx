import Layout from '../sanity/components/Layout'
import Services from '../sanity/components/Services'
import Carousel from '../sanity/components/Carousel'
import BookingComponent from '../sanity/components/BookingComponent'

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Carousel />
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Services src="your_iframe_source" style={{ width: '100%', height: '100%' }}/>
          <BookingComponent >
          </BookingComponent>
        </div>
      </Layout>
    </>
  )
}
