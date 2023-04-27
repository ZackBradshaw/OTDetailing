
import React from 'react';
import Link from 'next/link'
const Card = ({  title, description, link  }) => {
  
  return (
<div className="card glass">
    <a href={link}>
        <div className="card-body w-[20rem] ">
          <h2 className='card-title'>{title}</h2>
          <p>{description}</p>
          <div className='card-actions justify-end'>
        </div>
      </div>
    </a>
</div>
  );
};

export default Card;