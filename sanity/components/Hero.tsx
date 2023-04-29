const Hero = ({ image, title, descriptions, }) => {
  return ( 
<div className="hero min-h-[50vh] text-secondary content-fill" style={{ backgroundImage: `url(${image})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5">{descriptions}</p>
    </div>
  </div>
</div>
  );
};

export default Hero;