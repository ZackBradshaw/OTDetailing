import Navbar from '../sanity/components/Navbar'
import Layout from '../sanity/components/Layout'
import Hero from '../sanity/components/Hero'
import Services from '../sanity/components/Services'
import CalendlyInbed from '../sanity/components/CalendlyInbed'

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Hero />
        <Services />
        <CalendlyInbed /> 
      </Layout>
    </>
  )
}
