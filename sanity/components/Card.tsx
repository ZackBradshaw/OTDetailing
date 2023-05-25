
import React from 'react';
import Link from 'next/link'
const Card = ({  title, description, link  }) => {
  
  return (
<div className="card glass lg:w-[20rem] text-center bg-opacity-30 rounded-sm ">
    <a href={link}>
        <div className="card-body text-center h-[10vh] p-1">
          <h2 className='card-title justify-center h-[40%]' >{title}</h2>
          <p>{description}</p>
      </div>
    </a>
</div>
  );
};

export default Card;