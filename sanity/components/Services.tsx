'use client'
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
      className='w-full'
      pricing-table-id='prctbl_1NNiMMHRwxuUHV7LnsFg0qqe'
      publishable-key='pk_live_51MTwkEHRwxuUHV7L7aIHPLFiZIHxo2MZyqegzWU7W6GSGBXyvlaZMumTaMT1rpJUDl0ptlNge93IyGmiJetYn2ue00KL94kiCA'>
    </stripe-pricing-table>
  )
}

export default Services
