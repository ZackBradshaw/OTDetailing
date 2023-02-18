import React from 'react'
import Card from './Card'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
function Services() {
  return ( 
        <stripe-pricing-table 
          className="w-full"
          pricing-table-id="prctbl_1McG2LHRwxuUHV7L7a6UQmgO"
          publishable-key="pk_test_51MTwkEHRwxuUHV7LchXa0p96qgiuDwEQfU23T2hu0YfaQ3f94PKifZWN1HzYEwGeWgYyaaGsYtfHrL9aLA0HolGd00whNNDeDi">
        </stripe-pricing-table> 
  )
}

export default Services
