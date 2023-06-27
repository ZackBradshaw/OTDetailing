import Layout from '../sanity/components/Layout'
import Services from '../sanity/components/Services'
import Carousel from '../sanity/components/Carousel'
import BookingComponent from '../sanity/components/BookingComponent'
import ServiceCards from '../sanity/components/ServiceCards'

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Carousel />
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Services />
          <BookingComponent />
        </div>
        {/*in the decription field fill in interior services*/}
        <ServiceCards image={'Interior.jpg'} title={'Interior Detailing Services'} description={
          'Vacuuming: This includes seats, trunk, rear cargo area, etc.\n' +
          'Shampooing/Steam Cleaning: This can be done on the carpets, floor mats, and cloth seats.\n' +
          'Leather Cleaning and Conditioning: For leather seats and interior trim.\n' +
          'Cleaning and Polishing: This applies to components like dashboards, inner door panels, and other plastic or composite materials.\n' +
          'Window and Mirror Cleaning: Ensuring clear visibility.\n' +
          'Deodorizing: To remove any unpleasant odors. '}/>
      </Layout>
    </>
  )
}
