import React from 'react';
import { add } from '@dnd-kit/utilities'

interface Service {
  name: string;
  description: string;
}

interface Props {
  serviceType: 'interior' | 'exterior' | 'miscellaneous';
}

const DetailingServices: React.FC<Props> = ({ serviceType }) => {
  const interiorServices: Service[] = [
    {
      name: 'Vacuuming',
      description: 'This includes seats, trunk, rear cargo area, etc.'
    },
    
    {
      name: 'Shampooing/Steam Cleaning',
      description: 'This can be done on the carpets, floor mats, and cloth seats.'
    },

    {
      name: 'Leather Cleaning and Conditioning',
      description: 'For leather seats and interior trim.'
    },
    
    {
      name: 'Cleaning and Polishing',
      description: 'This applies to components like dashboards, inner door panels, and other plastic or composite materials.'
    },
    
    {
      name: 'Window and Mirror Cleaning',
      description: 'Ensuring clear visibility.'
    },
    
    {
      name: 'Deodorizing',
      description: 'To remove any unpleasant odors.'
    }, 
    
  ];

  const exteriorServices: Service[] = [
    {
      name: 'Hand Washing',
      description: 'Thoroughly cleaning the exterior of the car using specialized car cleaning solutions.'
    },
    
    {
      name: 'Waxing/Polishing',
      description: 'To give the car a glossy finish and protect the paint.'
    },
    
    {
      name: 'Claying',
      description: 'A clay bar is used to remove any impurities and contaminants from the surface of the car.'
    },
    
    {
      name: 'Scratch and Swirl Removal',
      description: 'This can be done using a buffer and polish.'
    },
    
    {
      name: 'Trim Restoration',
      description: 'For restoring plastic and rubber trims.'
    },
    
    {
      name: 'Glass Cleaning',
      description: 'Ensuring windows and windshields are clean and streak-free.'
    },
    
    {
      name: 'Tire and Wheel Cleaning and Polishing',
      description: 'Includes cleaning, polishing, and dressing tires and wheels.'
    },
    
    {
      name: 'Engine Bay Cleaning',
      description: 'Cleaning the engine bay can make it easier for mechanics to work on the car and can help identify any potential issues sooner.'
    },
    
  ];

  const miscellaneousServices: Service[] = [
    {
      name: 'Headlight Restoration',
      description: 'Over time, headlights can become cloudy or yellowed, and a restoration service can help them shine like new.'
    },
    
    {
      name: 'Paint Protection Film/Ceramic Coating',
      description: 'These services offer additional protection for a car\'s paint job.'
    },
    
    {
      name: 'Headlight Restoration',
      description: 'Over time, headlights can become cloudy or yellowed, and a restoration service can help them shine like new.'
    },
    
    {
      name: 'Paint Protection Film/Ceramic Coating',
      description: 'These services offer additional protection for a car\'s paint job.'
    },
    
    {
      name: 'Undercarriage Cleaning',
      description: 'This service involves cleaning the undercarriage of the vehicle to remove dirt, grease, and grime.'
    },
    
    {
      name: 'Pet Hair Removal',
      description: 'If a customer frequently transports pets in their vehicle, offering a pet hair removal service can be beneficial.'
    },
    
    {
      name: 'Ozone Treatment',
      description: 'An ozone generator can be used to neutralize odors in a car, particularly useful for vehicles that have been smoked in.'
    }
  ];

  let services: Service[] = [];
  switch (serviceType) {
    case 'interior':
      services = interiorServices;
      break;
    case 'exterior':
      services = exteriorServices;
      break;
    case 'miscellaneous':
      services = miscellaneousServices;
      break;
  }

  return (
    <ul>
      {services.map((service, index) => (
        <li key={index}>
          <strong>{service.name}</strong>: {service.description}
        </li>
      ))}
    </ul>
  );
};

export default DetailingServices;

