
import React from 'react';
import Link from 'next/link'
const Card = ({  title, description, link  }) => {
  
  return (
    <div className="card w-96 h-[300px] w-[300px] bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <Link href={link}>
              Buy Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;