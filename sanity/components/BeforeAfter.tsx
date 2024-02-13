import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const BeforeAfter = () => (
  <>
    <div className="carousel w-full flex flex-row justify-center items-center">
      <div id="slide1" className="carousel-item relative">
        <div className="compare-slider-container gap-10 flex flex-row justify-center items-center !important">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="trunk-after.jpg" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
            itemTwo={<ReactCompareSliderImage src="trunk-before.jpg" alt="Image two" style={{ objectFit: 'cover', height: "300px", width : "300px"}} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="1a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width : "300px"}} />}
            itemTwo={<ReactCompareSliderImage src="1b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width : "300px"}} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="2a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width : "300px"}} />}
            itemTwo={<ReactCompareSliderImage src="2b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width : "300px"}} />}
          />
        </div>
      </div>
      <div id="slide2" className="carousel-item relative">
        <div className="compare-slider-container flex flex-row justify-center items-center !important">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="3a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
            itemTwo={<ReactCompareSliderImage src="3b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="4a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
            itemTwo={<ReactCompareSliderImage src="4b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="5a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
            itemTwo={<ReactCompareSliderImage src="5b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
          />
        </div>
      </div>
      <div id="slide3" className="carousel-item relative">
        <div className="compare-slider-container flex flex-row justify-center items-center !important">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="6a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
            itemTwo={<ReactCompareSliderImage src="6b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="7a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
            itemTwo={<ReactCompareSliderImage src="7b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="12a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
            itemTwo={<ReactCompareSliderImage src="12b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
          />
        </div>
      </div>
      <div id="slide4" className="carousel-item relative">
        <div className="compare-slider-container flex flex-row justify-center items-center !important">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="9a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
            itemTwo={<ReactCompareSliderImage src="9b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="10a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
            itemTwo={<ReactCompareSliderImage src="10b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="11a.png" alt="Image one" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
            itemTwo={<ReactCompareSliderImage src="11b.png" alt="Image two" style={{ objectFit: 'cover', height: "300px", width: "300px"}} />}
          />
        </div>
      </div>
    </div>
    <div className="flex justify-center w-full py-2 gap-2">
      <a href="#slide1" className="btn btn-xs">1</a>
      <a href="#slide2" className="btn btn-xs">2</a>
      <a href="#slide3" className="btn btn-xs">2</a>
      <a href="#slide4" className="btn btn-xs">4</a>
    </div>
  </>
);

export default BeforeAfter

