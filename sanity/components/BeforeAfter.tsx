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
        } else {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    } else {
      setLoadedImages([]);
    }
  }, [isGalleryOpen, images.length, loadedImages.length]);

  return (
    <div className="">
      <div 
        className="flex justify-between items-center bg-primary text-white p-4 cursor-pointer w-full" 
        onClick={() => setIsGalleryOpen(!isGalleryOpen)}
      >
        <h2 className="text-2xl font-bold">Gallery</h2>
        <span>{isGalleryOpen ? '▲' : '▼'}</span>
      </div>
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isGalleryOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {loadedImages.map((image, index) => (
            <div key={index} className="w-full aspect-square">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={image.srcOne} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src={image.srcTwo} alt="Image two" />}
                style={{ height: '300px', width: '300px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
