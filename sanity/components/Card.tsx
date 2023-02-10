
import React from 'react';
const Card = ({  title, description  }) => {
  return (
    <div className="card w-96 h-[300px] bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;