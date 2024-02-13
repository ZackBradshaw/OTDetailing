import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { useState, useEffect } from 'react';

const BeforeAfter = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const images = [
    { srcOne: "trunk-after.jpg", srcTwo: "trunk-before.jpg" },
    { srcOne: "1a.png", srcTwo: "1b.png" },
    { srcOne: "2a.png", srcTwo: "2b.png" },
    { srcOne: "3a.png", srcTwo: "3b.png" },
    { srcOne: "4a.png", srcTwo: "4b.png" },
    { srcOne: "5a.png", srcTwo: "5b.png" },
    { srcOne: "6a.png", srcTwo: "6b.png" },
    { srcOne: "7a.png", srcTwo: "7b.png" },
    { srcOne: "12a.png", srcTwo: "12b.png" },
    { srcOne: "9a.png", srcTwo: "9b.png" },
    { srcOne: "10a.png", srcTwo: "10b.png" },
    { srcOne: "11a.png", srcTwo: "11b.png" },
  ];

  useEffect(() => {
    if (isGalleryOpen) {
      const timer = setInterval(() => {
        if (loadedImages.length < images.length) {
          setLoadedImages(images.slice(0, loadedImages.length + 1));
        }
      }, 100);
      return () => clearInterval(timer);
    } else {
      setLoadedImages([]);
    }
  }, [isGalleryOpen, images.length, loadedImages.length]);

  return (
    <div>
      <div className="flex justify-between items-center bg-primary text-white p-4 cursor-pointer min-w-screen-2xl " onClick={() => setIsGalleryOpen(!isGalleryOpen)}>
        <h2 className="text-2xl font-bold">Gallery</h2>
        <span>{isGalleryOpen ? '▲' : '▼'}</span>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 transition-opacity duration-500 ease-in-out ${isGalleryOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}>
        {loadedImages.map((image, index) => (
          <ReactCompareSlider
            key={index}
            itemOne={<ReactCompareSliderImage src={image.srcOne} alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
            itemTwo={<ReactCompareSliderImage src={image.srcTwo} alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
          />
        ))}
      </div>
    </div>
  );
};

export default BeforeAfter
