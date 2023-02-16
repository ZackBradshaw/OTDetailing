const Hero = () => {
  return (
<div className="hero min-h-[50vh] text-secondary content-fill" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1527581849771-416a9d62308e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Our Mission</h1>
      <p className="mb-5">is to provide the best car detailing services with exceptional customer service. Using the latest tools and techniques, we aim to bring out the best in every vehicle. We strive for convenience and professionalism, building lasting relationships based on trust and quality results.</p>
    </div>
  </div>
</div>
  );
};

export default Hero;