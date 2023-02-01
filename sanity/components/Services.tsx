import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <div className="flex justify-around p-5">
     <Card image="https://picsum.photos/seed/picsum/800/800" title="Basic" />
      <Card image="https://picsum.photos/seed/picsum/800/800" title="Normal" />
      <Card image="https://picsum.photos/seed/picsum/800/800" title="Advanced" />
    </div>
   );
}; 
export default Services;