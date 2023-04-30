const Hero = ({ image, title, descriptions, }) => {
  return ( 
<div className="hero min-h-[50vh] text-secondary content-fill" style={{ backgroundImage: `url(${image})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content align-start max-w-screen-2x1 w-full text-neutral-content">
      <h1 className="mb-5 text-5xl align-start ml-[10%] max-w-screen-2x1 font-bold">{title}</h1>
      <p className="mb-5 max-w-screen-2x1 w-full align-start">{descriptions}</p>
  </div>
</div>
  );
};

export default Hero;