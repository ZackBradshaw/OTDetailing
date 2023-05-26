
import React from 'react';
import Link from 'next/link'
const Card = ({  title, link  }) => {
  
  return (
<div className="card glass lg:w-[20rem] text-center bg-opacity-30 rounded-sm ">
    <a href={link}>
        <div className="card-body text-center h-[10vh] pt-[12%] items-center p-1">
          <h2 className='card-title align-center text-[2rem]' >{title}</h2>
      </div>
    </a>
</div>
  );
};

export default Card;