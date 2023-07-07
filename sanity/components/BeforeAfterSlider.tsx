import React, { useState, useEffect } from 'react';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  useEffect(() => {
    const topImage = document.getElementById('top-image');
    if (topImage) {
      topImage.style.width = `${sliderPosition}%`;
    }
  }, [sliderPosition]);

  return (
    <div className="relative">
      <img src={beforeImage} alt="Before" className="w-full" />
      <img
        id="top-image"
        src={afterImage}
        alt="After"
        className="absolute top-0"
      />
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(e.target.value)}
        className="absolute bottom-0 w-full"
      />
    </div>
  );
};

export default BeforeAfterSlider;
