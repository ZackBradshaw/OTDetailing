import Layout from '../sanity/components/Layout'
import Hero from '../sanity/components/Hero'
import Services from '../sanity/components/Services'
import CalendlyInbed from '../sanity/components/CalendlyInbed'
import Carousel from '../sanity/components/Carousel'

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Hero />
        <Services />
        <CalendlyInbed />
        <Carousel />
      </Layout>
    </>
  )
}
