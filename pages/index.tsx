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
        <Services />
        <CalendlyInbed />
      </Layout>
    </>
  )
}
