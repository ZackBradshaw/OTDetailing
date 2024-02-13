import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { useState } from 'react';

const BeforeAfter = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center bg-primary text-white p-4 cursor-pointer" onClick={() => setIsGalleryOpen(!isGalleryOpen)}>
        <h2 className="text-2xl font-bold">Gallery</h2>
        <span>{isGalleryOpen ? '▲' : '▼'}</span>
      </div>
      {isGalleryOpen && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="trunk-after.jpg" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
            itemTwo={<ReactCompareSliderImage src="trunk-before.jpg" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="1a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
            itemTwo={<ReactCompareSliderImage src="1b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="2a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
            itemTwo={<ReactCompareSliderImage src="2b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="3a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
            itemTwo={<ReactCompareSliderImage src="3b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="4a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
            itemTwo={<ReactCompareSliderImage src="4b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="5a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
            itemTwo={<ReactCompareSliderImage src="5b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="6a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
            itemTwo={<ReactCompareSliderImage src="6b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="7a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
            itemTwo={<ReactCompareSliderImage src="7b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="12a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
            itemTwo={<ReactCompareSliderImage src="12b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="9a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
            itemTwo={<ReactCompareSliderImage src="9b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="10a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
            itemTwo={<ReactCompareSliderImage src="10b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="11a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
            itemTwo={<ReactCompareSliderImage src="11b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px" }} />}
          />
        </div>
      )}
    </div>
  );
};

export default BeforeAfter
